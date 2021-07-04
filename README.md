# Development Process

<!-- by Karsen Hansen: -->

### 1. Initial set-up

- Project root directory created
- Project/client directory created using 'npx create-react-app Client'
- Project/Server directory created and initalized using 'npm init -y'

### 2. Install Project/server dependancies

- body-parser (send post request)
- cors (cross origin requests)
- express (framework for creating the router)
- mongoose (create database models)
- nodemon (so we don't have to manually restart the server after making changes)

### 3. Import Project/server dependancies into server file

```JavaScript
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
```

- within `*Project/server/index.js*`

### 4. Alter package.json

- Add `"type": "module",` under `"main": "index.js",` for importing express similarly to other imports
- Delete "test" script and replace with `"start": "nodemon index.js"`

### 5. Install Project/client dependancies

- axios
- moment
- react-file-base64
- redux
- redux-thunk (async actions using redux)
- @material-ui/core

### 6. Delete Project/client/src directory to start fresh, including only:

- index.js
- App.js

### 7. Setup basic express() app

- within `*Project/server/index*`

```JavaScript
const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
```

### 8. Create database cluster on MongoDB & add CONNECTION_URL to Project

- within `*Project/server/index.js*`
- NOTE\*\* - will add into env variables later

### 9. Add URL/PORT variables and connect Mongoose server to DB

### 10. Created routes directory within Project/server/routes to handle all routes concerning posts

- import express from express
- created router

### 11. Create a new directory in Project/server for controllers

- Create posts.js controller
- Move logic from posts.js within route into posts.js in controller and export (getPosts) to posts.js routes for good house-keeping
- (Routes in one js file with functional logic in the other)

### 12. Create a new modal within a new model directory in Project/server for our posts

- Bring in Mongoose
- Create a model Schema
- Create a model from the schema and export

### 13. Create createPost (post) route passing in logic from the controller

- create the `router.post('/', createPost)` route and import along with getPosts
- create the `createPost` logic within the controller and export

### 14. Import PostMessage model from Project/server/models/postMessage.js into the posts controller to have access

- Add try/catch blocks to functional callback exports within the controller

### 15. Moving back to the front-end to be able to make post requests

- Create the file heirarchy within the new Project/client/src/components directory
- Includes Form & Posts/Post

### 16. Import Material UI to app

- create a new container within the App to contain / center everything
- create an AppBar within the container
- create a Typography within the AppBar
- add an img below using images from a newly created images directory within src

### 17. Create a new `images` directory within the Project/client/src

- download the 'memories' image from JavaScript Mastery into the imagages directory
- import the memories png into App.js

### 18.
