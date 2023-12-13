# 🔥 Book Chat
https://github.com/Ayyanaruto/MyssteryBox/assets/72731349/d6850c25-491b-4954-9562-cf12ebab5128

<img src="https://github.com/Ayyanaruto/Ayyanaruto/blob/a8ab3ec2f7b0db200c750cd1f22c303d6a1c2a08/LINE.gif"><br><br>

##  🤔 About BookChat
<p>Booksterz is a MERN stack project built in Typescript, hosted on https://www.myssterybox.in/. It features a seamless book-buying experience with Razorpay payment gateway integration. Users can authenticate with Google via Passport.js, buy/sell books, and utilize an "Add to Cart" feature. Address input is followed by a smooth payment process, generating a receipt upon successful transactions. On the admin side, functionalities include adding/updating books using Cloudinary widget, editing book details, deleting books, and managing delivery status</p>


<img src="https://github.com/Ayyanaruto/Ayyanaruto/blob/a8ab3ec2f7b0db200c750cd1f22c303d6a1c2a08/LINE.gif"><br><br>

## 👨‍💻 Technoligies Used

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![EXPRESS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NODE](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS%20-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=3395FF)

## 📋 Installation Instructions
## BookChat: A MERN Stack Project for Buying/Selling Book Recommendations

**BookChat** is a full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to share book recommendations and connect with fellow book lovers. This document outlines the installation and setup steps for the project.

### Prerequisites

* Node.js v16.13.0 or later ([https://node.js.org/en/download/](https://node.js.org/en/download/))
* npm v8.1.2 or later (bundled with Node.js)
* MongoDB v5.0 or later ([https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/))
* Git ([https://git-scm.com/downloads](https://git-scm.com/downloads))

### Installation

1. **Clone the BookChat repository:**

```
git clone https://github.com/Ayyanaruto/BookChat.git
cd BookChat
```

2. **Install dependencies:**

```
npm install
```

3. **Set up MongoDB:**

* Start a MongoDB instance. You can use the default port (27017) or specify a custom port.
* Create a database for BookChat (e.g., `bookchat`).

4. **Configure environment variables:**

* Create a `.env` file in the project root and add the following environment variables:

```
GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET: These are obtained from the Google API Console when creating a project and enabling Google Sign-In or other Google APIs. You'll find them in the "Credentials" section under "OAuth client IDs".

COOKIE_SECRET: This is used for secure cookie signing in web applications. You should generate a strong, random secret using a tool like openssl rand -base64 32. Don't store it in plain text or in your code.

CLOUDINARY_CLOUD_NAME, CLOUDINARY_CLOUD_API_KEY, CLOUDINARY_CLOUD_API_SECRET: These are obtained from your Cloudinary account settings or API documentation. They're used to access Cloudinary's image and video management services.

RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET, RAZORPAY_WEBHOOK_SECRET: These are obtained from your Razorpay account dashboard or API documentation. They're used to integrate Razorpay for online payments in your application.

MONGODB_URI: This is the connection string for your MongoDB database. You can find it in your MongoDB Atlas dashboard or configuration files.

```


### Running the Application

1. Open a new terminal window and navigate to the `client` directory:

```
cd client
```

2. Install client-side dependencies:

```
npm install
```
3. **Client side Enviroment Variable**
* Create a `.env.developement` file in the client folder and add the following environment variables:
```
REACT_APP_RAZORPAY_ID= It is obtained from razorpay dashboard

REACT_APP_PROXY= Here add your server Route, Example : http://localhost:3000

```

### Start the development server:

```
cd..

npm run dev
```

This will start the both Server and React application on http://localhost:3000.

**Note:** You can access the BookChat application at http://localhost:3000.

### Deployment
**Note:** You can deploy on [render.com,](https://render.com/) Its very easy to deploy there. <br>

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)


**Note:** Just add this script in build command during Setup
```
 npm install && npm run heroku-postbuild && npm run postinstall
```

## Additional Notes

* This is a basic installation guide. You may need to adjust the steps based on your specific environment.
* Feel free to contribute to the project by creating pull requests on GitHub.

We hope this helps you get started with BookChat!


| Name             | GitHub Profile                              |
| ---------------- | ------------------------------------------- |
|<img src="https://avatars.githubusercontent.com/u/72731349?v=4" width="100" height="100"> | [github.com/Ayyannaruto](https://github.com/Ayyanaruto) |



