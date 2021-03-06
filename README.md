# ReactJS-todolist
Todo List with React and node.js

This document describes how to run this todolist code using reactJS and node.js

To just see the ReactJS code, look in ReactJS-todolist/src/index.js

To run the code with node and React, see the instructions below:

1. Download the ReactJS-todolist directory. This should contain everything you need to start the reactJS app and the node server.

2. Open two terminal windows. in the first, cd into the todolist folder.To check, type "ls" into terminal and you should see node_modules, package.json, package-lock.json, public, a readme file, server.js, and an src directory.

4. In the first terminal window, once you have cd'ed into the todolist directory, type "npm install --save cors" into your terminal. this will install all the node modules necessary for the node server. This will take a minute or two. If you don't want to do this and instead want to just see the code, look in ReactJS-todolist/src/index.js

5. Once you have installed node modules, type "node server.js". This will run the server.js file with a node server. If you already have something running on port 8080, you may need to modify the code in server.js. When you server is running successfully, you should see "Listening" as an output in your terminal window.

6. Next, open the second terminal window, and cd into .../todolist/src/ . In src, you should see two files: index.css and index.js

7. If you see these two files, type "npm start" into terminal and your react server should start right up on port 3000.

8. Success! Your todolist should be working.
