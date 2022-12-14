const express=require("express");
// const { dirname } = require("path");
const hbs = require("hbs");
const app = express();
const path=require("path")
const port=3000;

//Built-in MiddleWare - staticPath Set 
const staticPath=path.join(__dirname, "../public");
// app.use(express.static(staticPath));

//TemplatePath - middleware
const templatePath=path.join(__dirname,"../templates/views");

//Partials Path
const partialsPath=path.join(__dirname,"../templates/partials")

//Set View Engine- hbs,ejs,pug
app.set("view engine","hbs");
app.set('views',templatePath);

//hbs Partials Path use
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

//public/index.html delete 
//Template engine Route -- render templates/views/index.hbs
app.get("/", (req,res)=>{
    res.render("index");
});

app.get("/about", (req,res)=>{
    res.render("about",{
        name:req.query.name
    });
});

app.get("/contact", (req,res)=>{
    res.render("contact");
});

app.get('*', (req,res)=>{
    res.render("404",{
        errorComment:"Error 404"
    });
});

app.listen(port,()=>{
    console.log(`Port is Listeninig at ${port}`);
});
