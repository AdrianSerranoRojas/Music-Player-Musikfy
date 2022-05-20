# [Musikfy](#Musikfy)

## 📔 Description

**A Music player made with React and Node.js**

Listen to your favorite artists and bands, discover songs on other people playlists and bring them to yours!

## Table of Contents <!-- omit in toc -->

- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Contents and Branches Naming Strategy](#contents-and-branches-naming-strategy)
  - [Branches](#branches)
  - [Structural elements](#structural-elements)
  - [Style elements](#style-elements)
- [Screenshots](#screenshots)
- [File Structure](#file-structure)
- [Technology used](#technology-used)

## Requirements

This project runs with some specific technologies that require a previous installation to work with it:

| Function                 | Technology                                                   | Required |
| ------------------------ | ------------------------------------------------------------ | -------- |
| Code editor              | [VS Code](https://code.visualstudio.com/)                    | True\*   |
| Mongo DataBase           | [MongoDB](https://www.mongodb.com/)                          | True     |
| MongoDB Visual Interface | [Visual BD Helper](https://www.mongodb.com/products/compass) | True     |
| PHP Myadmin              | [PHP MyAdmin](https://www.phpmyadmin.net/)                   | True     |
| Package manager for PHP  | [Composer](https://getcomposer.org/)                         | True     |
| Cloud file manager       | [Cloudinary](https://cloudinary.com)                         | True     |

\*_You can choose between dozens of possibilities, VSCode is only a recommendation_

### ENV files

It's required to create .env files to store your environment and sensitive information.

For the **client** .env is necessary to add the **Firebase** configuration and credentials, your **Cloudinary** path and credentials, and your access path to both Server.

For **main server** .env is necessary to add the **Firebase Admin** credentials, your **Mongo Database** connection information and the path to the **Client**.

For the **secondary server** .env it is required to have the data related to the **Laravel configuration** and to the **SQL Database** connection.

## Getting Started

1. Clone the repository

   ```
   $ git clone https://github.com/AdrianSerranoRojas/Music-Player-Musikfy.git
   ```

2. Installing
   ```
   $ node install
   ```
3. Start

- Open terminals for client

  ```
  $ node client
  ```

- Open terminal for NodeJs server (don't forget to initialise MongoDB)
  ```
  $node server
  ```
- And last but not least open terminal for Laravel server (and remember to start your server package)
  ```
  $ node stats
  ```

## Dependencies

- [Axios](https://github.com/axios/axios)
- [Bootstrap](https://getbootstrap.com/)
- [Bootstrap-icons](https://icons.getbootstrap.com/)
- [Cloudinary](https://github.com/cloudinary/cloudinary_npm)
- [CORS](https://github.com/expressjs/cors)
- [Clsx](https://github.com/lukeed/clsx)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Emotion-react](https://github.com/emotion-js/emotion/tree/main/packages/react)
- [Emotion-Styled](https://github.com/emotion-js/emotion/tree/main/packages/styled)
- [Express](https://expressjs.com/)
- [Express-fileupload](https://github.com/richardgirges/express-fileupload)
- [Firebase](https://firebase.google.com/)
- [Firebase-admin](https://github.com/firebase/firebase-admin-node)
- [FSextra](https://github.com/jprichardson/node-fs-extra)
- [Formik](https://formik.org/)
- [Helmet](https://github.com/helmetjs/helmet)
- [Jsmediatags](https://github.com/aadsm/jsmediatags)
- [Loglevel](https://github.com/pimterry/loglevel)
- [Mongoose](https://mongoosejs.com/)
- [Morgan](https://github.com/expressjs/morgan)
- [Mui-Icons](https://mui.com/material-ui/material-icons/)
- [Mui-Material](https://v4.mui.com/)
- [Mui-Styles](https://mui.com/system/styles/basics/)
- [Nodemon](https://nodemon.io/)
- [React](https://reactjs.org/)
- [React-Router-DOM](https://reactrouter.com/web/guides/quick-start)
- [React-Beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [React-Dom](https://reactjs.org/docs/react-dom.html)
- [React-Dropzone](https://github.com/react-dropzone/react-dropzone)
- [React-H5-audioPlayer](https://github.com/lhz516/react-h5-audio-player)
- [React-Icons](https://react-icons.github.io/react-icons/)
- [React-MusicPlayer](https://github.com/lijinke666/react-music-player)
- [React-Redux](https://react-redux.js.org/)
- [React-Select](https://github.com/JedWatson/react-select/tree/master/packages/react-select)
- [Reduxjs-toolkit](https://redux-toolkit.js.org/)
- [Sass](https://sass-lang.com/)
- [StyledComponents](https://styled-components.com/)
- [Validator](https://github.com/validatorjs/validator.js)
- [Yup](https://github.com/jquense/yup)

## Contents and Branches Naming Strategy

This project has a naming strategy for its different elements to facilitate and unify the work between its Collaborators. These conventions are presented below.

### Branches

Branches were created for different category main components and have been cleaned up.
The category word tries to be descriptive and define the content of the branch: **Playlist** , **UITheme**, **MusicPlayer**.
By this rule this is a real case of the Branch name that you can find in this same project: _origin/MusicPlayer_.

### Structural elements

Structural element names have a strict policy to be simple, clear and descriptive. This element includes React components and pages as well as all the main elements of Servers, and normally have to be written with **camelCase** convention. The exception to this are React components, who are written using **PascalCase** convention.

### Style elements

Style elements, that includes all _scss_ files and _classes_ have the same rules: lowercase. The names need to be **descriptive** but **short**.

## Screenshots

- Log in with your email or a **Google Account** with total security.

- Save your most loved songs: you can find all of them on your **_Liked Songs_** section!

[![Image from Gyazo](https://i.gyazo.com/ad497b55f8209bc5b0d16e8e8237efbb.png)]

- Create your personal _Playlist_ and add as many tracks as you want.

[![Image from Gyazo](https://i.gyazo.com/e31ad588891f793e1ba8d807e5184156.png)]

- You don't remember the title of that song? Search by song name, playlist or band!

[![Image from Gyazo](https://i.gyazo.com/a43c4116c70894c361e84d73a25dfe7b.png)]

- Upload your own songs, only for your ears to enjoy.
- Are you an artist? Share your music with the world!

[![Image from Gyazo](https://i.gyazo.com/fbc9c2df4a176687f24f1ecab5fb1d7b.png)]




## Technology used

<details>
<summary>Front-end</summary>

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white)

</details>
<details>
<summary>Back-end</summary>

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=flat-square&logo=Nodemon&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongDB-47A248?style=flat-square&logo=MongoDB&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-C21325?style=flat-square&logo=Docker&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=PHP&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-FFCA28?style=flat-square&logo=Firebase&logoColor=blue)
![Laravel](https://img.shields.io/badge/-Laravel-orange)
![Composer](https://img.shields.io/badge/-Composer-green)
![Puppeteer](https://img.shields.io/badge/-Puppeteer-yellow)

</details>
