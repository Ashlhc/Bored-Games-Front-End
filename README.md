[Bored Games]

Table of Contents
 + Overview
 + Installation
 + Usage
 + Features
 + Contributing
 + Tests
 + Deployment
 + Built+ With
 + License
 + Contact
 + Acknowledgements


==== Overview ====

Bored Games is an interactive game application built using React.js. In this application, users can play the classic Hangman game against a computer and record their wins and losses. But it doesn't stop there, users can also enjoy social features such as global chat, personalized avatars, and the ability to follow other users and display those followers on their profile.

========



==== User Story ====

As a new user, I want to register for an account so that I can enjoy personalized features and play Hangman.
As a registered user, I want to log in so that I can access my account.
As a player, I want to play Hangman against the computer so that I can test my vocabulary and have fun.
As a user, I want to anonymously chat globally with other users so that I can socialize and discuss the game.
As a user, I want to choose an avatar so that I can customize my profile.
As a user, I want to search for other users so that I can find my friends or interesting people to follow.
As a user, I want to follow other users so that I can show their names on my profile.




==== Installation ====

Prerequisites:

Make sure to have Node.js and npm installed in your system.
A MySQL database is required.

========



==== Usage ====

1. Start your MySQL server. This step varies depending on your operating system.
    On Linux, you can typically start the server with sudo service mysql start
    On Windows, you can typically start the server through the MySQL Workbench
    On MacOS, you can typically start the server with mysql.server start from the command line

2. With your MySQL server running, open a new terminal window and navigate to your project directory. Seed your database by running the        following command:

    npm run seed

3. Start your Express.js server:

    npm start

4. Then open http://localhost:3000 or https://wellington-j-gallowsby-hangman.netlify.app/ to view it in the browser.

========



==== Features ====

-- Hangman Game against Computer --

Test your vocabulary in a fun, engaging way. The Hangman game is fully implemented with 100 juicy words across various categories. These words are chosen at random to give a fresh experience every time you play.


-- Global Chat --

Connect with other players worldwide through our Global Chat feature. Powered by Socket.IO, our real-time chat feature lets you discuss strategies, share your experiences, or simply connect over shared interests.

![Global chat](/src/assets/ChatScreenshot.png)

-- Avatar Customization --

Make your profile unique with our avatar customization feature. Choose from a wide range of available avatars to show off your style to the world.


-- User Search and Follow --

Our user search function allows you to find and connect with friends, enemies, or just users you find interesting. Once you follow another user, you'll see their name placed in the "Gallows Gang" section of your profile.


-- Persistent User Data --

Thanks to our MySQL database integration and Express.js backend, user data such as scores, settings, and friends lists are persistently stored and retrieved as needed, making for a seamless user experience.


-- Responsive Design --

Hangman Plus is designed with responsiveness in mind. Whether you're on a desktop, tablet, or mobile device, you'll enjoy a high-quality user interface and smooth gameplay.

========



==== Built With ====

React.js - A JavaScript library for building user interfaces, especially single-page applications.

React Router - A standard library for routing in React, used to create dynamic and responsive paths throughout the app.

Express.js - A back-end web application framework for Node.js, used for routing, middleware, and API creation.

Sequelize - A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server. It allows easy data manipulation and interaction with the database.

MySQL - An open-source relational database management system used for data persistence.

bcrypt - A library to help you hash passwords for secure storage in your database.

jsonwebtoken - A library to create access tokens for secure user authentication.

Socket.IO - A JavaScript library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers.

Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine, used for executing JavaScript code server-side.

npm - A package manager for JavaScript, used to install and manage project dependencies.

========



==== License ====

This project is licensed under the MIT License. See the LICENSE.md file for details.

========



==== Links ====

Deployed app:
https://wellington-j-gallowsby-hangman.netlify.app/

Backend repository:
https://github.com/Ashlhc/Bored-Games-Back-End