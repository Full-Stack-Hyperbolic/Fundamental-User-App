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

### 4. Alter package.json 
   - Add `"type": "module",` under `"main": "index.js",` for importing express similarly to other imports
   - Delete "test" script and replace with `"start": "nodemon index.js"`

### 5. Install Project/client dependancies
   - axios
   - moment
   - react-file-base64
   - redux
   - redux-thunk (async actions using redux)

### 6. Delete Project/client/src directory to create fresh one including only:
   - index.js
   - App.js

### 7. Setup basic express() app in Project/server/index

### 8. Created database cluster on MongoDB & add CONNECTION_URL to server/index

### 9. Add URL/PORT variables and connect Mongoose server to DB

### 10. Created routes dir within Project/server/routes to handle all routes concerning posts
   - import express from express
   - creater router
   