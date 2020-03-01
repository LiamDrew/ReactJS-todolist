// Initializes express app
const express = require('express');
const app = express();
app.use(express.json());
// Allows cross origin communication
let cors = require('cors');
app.use(cors());


//Temporary databasex
let DB = {
  todos: ["Feed Dog", "Feed Cat"]
}
app.get('/', function(req,res,next){
  console.log("gethappend")
  res.send(DB)
})
app.post('/', function(req,res,next){
  console.log("posthappened")
  DB=req.body;
  console.log(DB)
  res.send(DB)
})


// Spins up the server on port 8080
app.listen(8080, function(){
  console.log("Listening")
})
