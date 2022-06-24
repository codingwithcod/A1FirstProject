const express = require("express");
const app = express();
const path = require("path");
const hbs = require('hbs');

const port = process.env.PORT || 8000 ;



// Public static path=============
const static_path = (path.join(__dirname, "../public"));
const template_path = (path.join(__dirname, "../templates/views"));
const partials_path = (path.join(__dirname, "../templates/partials"))

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path)

app.use(express.static(static_path));



// Routing- ------------------- - - ---------------

app.get("", (req , res) =>{
    res.render("index")
});

app.get("/content", (req , res) =>{
    res.render("content")
});


app.get("/quiz", (req , res) =>{
    res.render("quiz")
});

app.get("/mission", (req , res) =>{
    res.render("mission")
});
app.get("/login", (req , res) =>{
    res.render("login")
});

app.get("/register", (req , res) =>{
    res.render("register")
});


app.get("*", (req , res) =>{
    res.render("  404 Error page Opppppsssssssssssss............... ")
});



app.listen(port , () => {
    console.log(`listning to the port at port no "${port}"`)
}) 