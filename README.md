### Development Process

1. Initial set-up
   a. Project root directory created
   b. Project/Client directory created using 'npx create-react-app Client'
   c. Project/Server directory created and initalized using 'npm init -y'

2. Install dependancies within Project/Server:
   a. body-parser (send post request)
   b. cors (cross origin requests)
   c. express (framework for creating the router)
   d. mongoose (create database models)
   e. nodemon (so we don't have to manually restart the server after making changes)

3. Import Project/Server dependancies into server file

4. Alter package.json
   a. Add "type": "module", under "main": "index.js", for importing express similarly to other imports
   b. Delete "test" script and replace with "start": "nodemon index.js"

