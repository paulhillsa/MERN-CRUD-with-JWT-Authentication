// Blogs component 
// This component displays all blogs to the (regular) user and shows the form to 
// add and edit blogs as well as the delete function to the admin

import React from 'react';
import { useContext } from 'react';
import AuthContext from "../../context/AuthContext";
import axios from 'axios';
import {Form, Container, Button} from 'react-bootstrap';

function Blogs(props) {

    //state management
    const [blogs, setBlogs] = React.useState([]);
    const [title, setTitle] = React.useState('');
    const [caption, setCaption] = React.useState('');
    const [content, setContent] = React.useState('');
    const [imageURL, setImageURL] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [id, setId] = React.useState('');
    const [blogId, setBlogId] = React.useState('');
    const [readMore, setReadMore] = React.useState(false);

    //context
    const { admin } = useContext(AuthContext);
    const { loggedIn } = useContext(AuthContext);
    
    //get all blogs
    React.useEffect(() => {
        axios.get('http://localhost:5000/blog/')
        .then(res => {
            setBlogs(res.data);
        })
        .catch(err => {
            console.error(err);
        })
    }, []);

    //delete a blog
    const deleteBlog = (id) => {
        axios.delete(`http://localhost:5000/blog/delete/${id}`)
        .then(res => {
            console.log(res.data);
            window.location.reload();
        })
        .catch(err => {
            console.error(err);
        });
    };

    //get blog by id to edit
    const getBlog = (id) => {
        axios.get(`http://localhost:5000/blog/${id}`)
        .then(res => {
            let data = res.data;
            setTitle(data.title);
            setCaption(data.caption);
            setContent(data.content);
            setImageURL(data.imageURL);
            setAuthor(data.author);
            setId(id);
        })
        .catch(err => {
            console.error(err);
        });
    };

    //edit a blog
    const editBlog = (id) => {
        axios.put(`http://localhost:5000/blog/edit/${id}`, {
            title,
            caption,
            content,
            imageURL,
            author
        })
        .then(res => {
            console.log(res.data);
            window.location.reload();
        })
        .catch(err => {
            console.error(err);
        });
    };

    // add a blog
    const addBlog = (e) => {
        e.preventDefault();
        const blogData = {
            title,
            caption,
            content,
            imageURL,
            author
        };
        axios.post('http://localhost:5000/blog/add', blogData)
        .then(res => {
            console.log(res.data);
            window.location.reload();
        })
        .catch(err => {
            console.error(err);
        });
    };

    //submit blog
    // this will either add a new blog or edit an existing blog
    // depending on whether the id is set or not
    const submitBlog = (e) => {
        e.preventDefault();
        if (id) {
            editBlog(id);
        }
        else {
            addBlog(e);
        }
    };

    // read more button
    // only show blog content for blog you click on
    const showReadMore = (id) => {
        if (readMore === false) {
            setReadMore(true);
            setBlogId(id);
        }
        else {
            setReadMore(false);
        }
    };

  return (
    <div>
        {admin === true && loggedIn === true && 
        <Container shadow-lg className='admin-control'> 
            <h1 id='blogs-form-h1'>Admin Control</h1>
            <Form> 
                <Form.Text className="text-muted">
                    <ul>
                        <li>
                            To add new blog, fill out the form below and click submit.
                        </li>
                        <li>
                            To edit a blog, click on the blog you want to edit and fill out the form below and click submit.
                        </li>
                        <li>
                            To delete a blog, click on the blog you want to delete and click delete.
                        </li>
                    </ul>
                </Form.Text>
                <Form.Group class='blogs-form-group' controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} /
                    >
                    <Form.Label> Caption </Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter caption" 
                        value={caption} 
                        onChange={(e) => setCaption(e.target.value)} 
                    />
                    <Form.Label> Content </Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter content" 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} />
                    <Form.Label> Image URL </Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter image URL" 
                        value={imageURL} 
                        onChange={(e) => setImageURL(e.target.value)} />
                    <Form.Label> Author </Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter author" 
                        value={author} 
                        onChange={(e) => setAuthor(e.target.value)} />  
                </Form.Group>
                <div className='blogs-form-button'>
                    <Button variant='success' onClick={submitBlog}>Submit Blog</Button>
                </div>
            </Form>
        </Container>
        }
        { loggedIn === true &&
        <Container id='big-blog-container'>
            <h1 id='web-dev-h1'>All Blogs</h1>
            {/* Map out all blog data */}
            {blogs.map(blog => (
                <div id='blog-container' key={blog._id}>
                    <img id='blog-image' src={blog.imageURL} alt="blog" />
                    <h3 id='blog-title'>{blog.title}</h3>
                    <p id='blog-caption'>{blog.caption}</p>
                    <p id='blog-author'> By {blog.author}</p>
                    {readMore === true && blogId === blog._id &&
                        <p id='blog-content'>{blog.content}</p>                 
                    }
                    <Button id='readmore-button'variant='primary' onClick={() => showReadMore(blog._id)}>Read More</Button>
                    <div id='edit-delete-button'>
                        {admin === true &&
                            <Button id='delete-button' variant='warning' onClick={() => getBlog(blog._id)}>Edit</Button>
                        }
                        {admin === true &&
                            <Button id='edit-button' variant='danger' onClick={() => deleteBlog(blog._id)}>Delete</Button>
                        }
                    </div>
                </div>
            ))}
            </Container>
        }
    </div>
    );
}

export default Blogs;