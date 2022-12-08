# CMS-Style Tech Blog

## Description

An application where developers can publish their blog posts and comment on other developers’ posts as well. It follows the MVC paradigm.

In this application,
- when the user visits the site for the first time, the homepage, which includes existing blog posts, navigation links for the homepage, dashboard, and log in, is presented.
- when the homepage option is clicked, the user is taken to the homepage.
- when any other link in the navigation is clicked, the user is prompted to either sign up or log in.
- a username and password is required to sign up.
- when the sign up button is clicked, the user credentials are saved and the user is now logged in.
- the user's username and password is required to sign in to the site.
- when the user is signed in, the log in navigation link now displays log out.
- on the homepage, the existing blog posts include the post title and the date created.
- when an existing blog post is clicked, the post title, contents, post creator's username, and date created for that post is displayed and the user has the option to leave a comment.
- when the user enters a comment and clicks the submit button, then the comment is saved and the post is updated to display the comment, the comment creator's username, and date created.
- when the dashboard link in the navigation is clicked, the user is taken to the dashboard and presented with any blog posts the user has created and the option to add a new blog post.
- when the add new blog post button is clicked, the user is prompted to enter both a title and contents for the blog post.
- when the button to create the new blog post is clicked, the title and contents are saved and the user is taken back to an updated dashboard with the new blog post.
- when an existing post is clicked on in the dashboard, the user is able to update or delete the post and is taken back to an updated dashboard.
- when log out is clicked, the user is signed out of the site.
- when the user is idle on the site for more than a set time, the user is able to view comments but not post a comment.

This application uses [express-handlebars](https://www.npmjs.com/package/express-handlebars) for the Views, [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL Database for the Models, [dotenv](https://www.npmjs.com/package/dotenv) to use environment variables, [bcrypt](https://www.npmjs.com/package/bcrypt) to hash passwords, and [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

## Visuals

![home-view](/assets/images/home-view.png)
![login-view](/assets/images/login-view.png)
![dashboard-view](/assets/images/dashboard-view.png)
![single-blog-view](/assets/images/single-blog-view.png)
![create-blog](/assets/images/create-blog.png)
![edit-blog](/assets/images/edit-blog.png)

## Deployed Link



## Questions

Feel free to contact me at jennyhawes24@gmail.com or look at my [Github](https://github.com/JenniferKiesler).