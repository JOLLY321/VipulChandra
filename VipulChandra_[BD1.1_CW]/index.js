let express = require("express");
let app = express();

// Q1

app.get("/name",(req,res)=> {
  let myName = (req.query.name).toUpperCase();
  res.send(myName);

});

// Q2

app.get("/fullname", (req,res) => {
  let firstname = (req.query.firstName).toUpperCase();
  let lastname = (req.query.lastName).toUpperCase();
  let fullname = firstname + " " + lastname ;

  res.send(fullname);
})

// Q3

app.get("/date",(res,req) => {
  let month = (req.query.month).toUpperCase();
  let year = req.query.year;
  let formattedDate = month + "," + year;

  res.setEncoding(formattedDate);
})

// Q4
app.get("/greet", (req, res) => {

  let name = req.query.name;
  let greeting = "Namaste, " + name + "!";

  res.send(greeting);

});

// Q5

app.get("/address", (req, res) => {

  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let address = street + "," + city + ", " + state;

  res.send(address);

});

// Q6

app.get("/email", (req, res) => { 
  let username = req.query.username; 
  let domain = req.query.domain;
  let email = username + "@" + domain;  

  res.send(email);

});


let PORT = 3000;
app.listen(PORT,()=> {
  console.log("Server is running on http://localhost:",PORT);
})