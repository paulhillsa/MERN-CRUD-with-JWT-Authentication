//index.js is my server file

//configure the server
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');


// Load env variables
dotenv.config();

//set up server
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
));


// port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
    }
);

//connect to mongoDB
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Connected to MongoDB');
        }
    }
);

//set up routes
const userRouter = require('./routers/userRouter');
const blogRouter = require('./routers/blogRouter');
app.use('/auth', userRouter);
app.use('/blog', blogRouter);
