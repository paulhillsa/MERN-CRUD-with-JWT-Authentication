# Paul's Web Development Blog App
### 'WebDevBlogger' is a simple blogging app that allows admins to create, edit, and delete posts and regular users are able to view them.

### Table of Contents
* [System Architecture](#system-architecture)
* [System Requirements](#system-requirements)
* [App Usage](#app-usage)

# <a name="system-architecture"> </a> System Architecture: 

In this project, I used the Model View and Controller ([MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)) design pattern.

I will be using the MVC design pattern because it is the most common design pattern in web development and therefore it will have universal recognition and easy maintenance due to the fact that it is commonly used.


Further, to implement such a design pattern I will me making use of the MERN stack which includes the technologies of MongoDB, Express, React, and Node.js.

## MERN

### Frontend/client Tier (View):

I will be making use of React.js (Create React App (CRA)), CSS and HTML.

### Backend/server Tier (Controller):

I will be making use of Node.js and Express.

### Database Tier (Model): 
I will be making use of MongoDB (a NoSQL database system).

## Reasons:

a) All the components of the MERN stack are open source, it's constantly being improved upon by tech experts from around the world

b) It’s a stack that’s easy to use and has a lot of features that you can use to create a robust web app.

c) MERN’s full-stack development approach means you’re responsible for building an application’s frontend and backend components, giving you full control over the code and architecture.

d) The application will be easier to test.

e) The application will be easier to deploy.

f) The application will be easier to maintain.

g) The application will be easier to scale.

h) The application will be built using only one language, JavaScript, so it is easily integrable.


## Styling:
For styling I will make use of React-Bootstrap and traditional CSS.


I will be using React-Bootstrap due to it's convenience and to ensure a general sense of quality and uniformity throughout the app.

Further I will be using CSS for all other custom styling needs.

# System Requirements Specification: 

## How this application will work:

My idea for this application is for the admin (myself) to be able to create, edit and delete blog post's. 

The admin will be able to create a blog post and then the admin will be able to edit and delete the blog post.

Whilst a general user will be able to view the blog posts.

This is similar to the prompt "An application that a conference centre could use to advertise upcoming events. Normal end-users might be able to see a list of upcoming events whereas an administrator might be able to add information about new events, cancel events, edit information about events etc." given in the course resources. 

However, I will be changing this to rather be an application where I can post my Web Development blog posts (as created with Blogger in a future task given), and I will be able to edit and delete them whilst normal end-users will be able to view them.

Generally, the application will allow user and admin access, which will be authenticated and authorised. 

Once successfully logged in a user can browse all web development blog posts whilst admin users can create, edit and delete blog posts.

Which will be able to be viewed by the general user.


## Who will use your application and how will they benefit from using it:

People who are interested in Web Development will be using this application and in what the admins will say about certian aspects of the Web Development field.

Further, I will be using this application to help me learn more about the Web Development field and to help me learn more about the Web Development stack.

## Analysing some existing web applications that do something similar to what I want to accomplish:

As mentioned previously this web application will share similar features to the following web application, Blogger.

## Differences from the existing software:

However, Blogger is a web application that allows users to create and edit blog posts on any topic whilst mine will purely be for my Web Development related contnet, and will be used to post my own Web Development blog posts.

It will hopefully be an application  which is clean and easy to navigate with little distracting features, offering a simpler and convenient way for generl users, as well as for admin users to enjoy which will hopefully be a better experience (especially for Web Development enthusiasts) for both as compared to Blogger.

Lastly, the application is built with only open-source libraries, that makes it less costly to run and maintain.

## <a name="system-requirements"> </a> Functional Requirements:

1) The application should allow creates, reads, updates and deletes information from MongoDB.
2) The application should be able to store information on MongoDB.
3) The application should authenticate the credentials when the user signs up, in and out via Google, Facebook and the      traditional way.
4) The application should be properly tested.
5) The application should be able to be deployed to Heroku.
6) The application should be able to be deployed to GitHub.
7) The application should offer an attractive and functional user interface.
8) The application should be able to be used by multiple users.
9) The application should be able to be used by multiple admins.
10) The application should be secured by Helmet to avoid breaches.
11) The application should be easily maintainable.
12) The application should have a custom server built using Express.
13) The application should have a custom database built using MongoDB.
14) The application should have a custom frontend built using React.
15) The application should have a custom backend built using Node/Express
16) The application should allow for normal end-user access and admin access. 
17) An administrator should be able to monitor and make changes to users’ behaviour.
18) An administrator should be able add, edit and delete blog posts.
19) An user and administrator should be able to view blog posts.
20) An user and administrator should be able to log in and out.

## Non-functional Requirements:

a) Usability
    The user interface should be intuitive and easy to use.
    The user interface should be easy to navigate.
    The user interface should be follow a uniform style.
    Overall user interface should be easy to understand.

b) Reliability
    The system should be reliable and robust.
    The system should be able to handle a large number of users.
    The system should be able to handle a large number of blog posts.
    The system should be able to handle a large number of messages.

c) Performance
    The web app should be fast and responsive.
    The web app should be able to handle large amounts of data.
    The web app should be able to handle large amounts of users.
    The web app should be able to handle large amounts of blog posts.

d) Security
    The web app should be secure.
    The data should be encrypted.
    The data should be protected from unauthorised access.

## User stories:

### For my user stories I will use the following format: "As a <role> , I want <goal/desire>, so that <benefit>"

As a user, I want to be able to create a new account, so that I can log in and use the app.

As a user, I want to be able to log in to my account, so that I can use the app.

As a user, I want to be able to log out of my account, so that I can log out of the app.

As a user, I want to be able to view all the blog posts, so that I can view the information.

As an administrator, I want to be able to create a new blog post, so that I can add information to the blog posts.

As an administrator, I want to be able to edit a blog post, so that I can edit information to the blog posts.

As an administrator, I want to be able to delete a blog post, so that I can delete information to the blog posts.

As an administrator, I want to be able to view all the blog posts, so that I can view the information.

As an administrator, I want to be able to log in to my account, so that I can use the app.

As an administrator, I want to be able to log out of my account, so that I can log out of the app.


# <a name="app-usage"> </a> How to use the app:

### To run locally:

a) Download the files available on the Github repo to your local enviroment.

b) In both the client and server folder, cd to them in your terminal and then install the node modules by running
```
npm i
```
in both the client and server folders. 

c) Create a .env file in the root of the Server folder and enter the values of the following keys:
```
MONGODB_URI=mongodb+srv://paulhillsa:7414@cluster0.cghzg.mongodb.net/devistry?retryWrites=true&w=majority

PORT=5000

JWT_SECRET=devistry
```
d) Once the node modules have successfully been installed run 
```
npm start
```
on both the client and server folders in your terminal

e) Afterwards you should be created by confirmation messages in your terminal to confirm that both the server and client have loaded successfully.

f) Lastly navigate to the below to view the working app in your local browser.
```
http://localhost:3000
```

g) To quickly test the functionality of the website without having to register both an admin and user profile you can make use of the following profiles for login:

ADMIN:

email: admin@gmail.com
password: password

USER:

email: user@gmail.com
password: password

## Testing 

To test the app simply navigate to/cd the test folder located in both the client and server folders on your command interface/terminal.

Type
```
npm test
```
to test the app!

## App functions/usage 
- To use the app one can simply register to either be an admin or a user.

- An admin will be able to access the admin controls which will allow one to add, edit, and delete a new blog.

- A user however, will be able to view(read) all blogs only.

- Once logged in a user/admin can click the logout button to logout from the site.

- Subsequently, a user/admin can log in to the website by using the login portal. 

## Application Security:
Helmet.js has been utilised to increase the security of the application. Helmet is a middleware for Express applications. It sets many different HTTP headers and aims to make applications more secure.

Adding these headers can help in avoiding attacks such as Cross-Site-Scripting (XSS), clickjacking, etc.

## Third Party API's:
No third party api's have been used for this project.

## Deployment:

This project has not been deployed.
