# Social Network API

![Badge](https://img.shields.io/badge/license-MIT-blue)

Link to walkthrough of routes: [Video Walkthrough](https://drive.google.com/file/d/1ZngbVoFKYsn6oJEEZ3r851kxJCi-93-D/view)

## Table of Contents
---
* [Installation](#installation)
* [Packages](#packages)
* [Description](#description)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

<br>



## Installation
---
To install this project: 
1. Start by forking this repository on Github. 
2. Clone this project to your machine by using the "git clone + URL" command. 
3. Open the project in VS Code or prefered integrated development environment.
4. Install Node.js from their website. [Install Node.js](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs).
5. Install MongoDB from their website. [Install MongoDB](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/).
6. Install [Insomnia](https://insomnia.rest/download). 
7. This project includes a package.json file that specifies dependencies for this project, so be sure to run <b>"npm install"</b>. This will install the packages specified in the next section. 

<br>

## Packages
---
General Technologies: 
- ![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
- Git 
- Insomnia

NPM Packages
- ![express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
- mongoose 
- moment

<br>

## Description

 The goal of this project is to build an API for a social network that allows users to share their thoughts, react to a friends' thoughts, and create a friend list. This project utilizes Express.js for routing, MongoDB for a NoSQL database, and Mongoose Object Document Mapper for Node.js. Follow the installation and usage routes to use this API! If you would like to experience the database seeded, please run the commands specified to seed it with data. To see this API in action, start the server and perform Get/Post/Put/Delete routes to the API from Insomnia. This program has full CRUD functionality.


## Usage

After following the instructions in installation: 
1. Open the "index.js" file in your integrated terminal.
2. Run command "npm run seed" to seed users into your database.
3. Run command "npm start". 
4. Open insomnia and type in "localhost:3001/api/_" in the address bar. Check out the following routes: <br><br>
User + Friends <br>
- `/api/users` to get all users or create user
- `/api/users/:userId` to get one user, update and delete user
- `/api/users/:userId/friends/:friendId` to add or delete a friend <br><br>
Thought + Reactions <br>
- `/api/thoughts` to get all thoughts or create thought
- `/api/thoughts/:thoughtId` to get one thought, update or delete. 
- `/api/thoughts/:thoughtId/reactions` to create reaction 
- `/api/thoughts/:thoughtId/reactions/:reactionId` to delete reaction 
5. When finished, run CONTROL-C in terminal to end the session

<br>

<br>

### Screenshots
--- 
User Routes <br>
![UserRoutesGif](assets/UserRoutes.gif)
<br>

Friend Routes <br>
![FriendRoutesGif](assets/FriendRoutes.gif)
<br>

Thought Routes<br>
![ThoughtRoutesGif](assets/ThoughtRoutes.gif)
<br>

Reaction Routes <br>
![Alt text](assets/ReactionRoutes.gif)
<br>

## License 
---
[MIT License](./LICENSE) <br>

This application is covered by the MIT license.

<br>
 
## Contributing 
---
This project was completed by myself, Alicia Keberle, as part of the University of Oregon Full Stack Development Bootcamp. If you would like to contribute, i am always looking for ways to ameliorate my projects.
<br>

## License 
---
[MIT License](./LICENSE) <br>

This application is covered by the MIT license.

<br>

## Questions?
---
Please contact me on Github at [keberlea](https://github.com/keberlea) or by [email](mailto:alicia.keberle@gmail.com).