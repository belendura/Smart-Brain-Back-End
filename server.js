const express = require("express");
const bodyParser=require("body-parser");
const CORS=require("cors");;
const bcrypt = require('bcrypt');
const knex=require("knex");
const register= require("./controllers/Register");
const signin= require("./controllers/SignIn");
const profile=require("./controllers/Profile");
const image=require("./controllers/Image");

const db= knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '*Bel1982*',
      database : 'smart-brain'
    }
  });

db.select('*').from('users').then(data =>
    {
        console.log(data);
    });

const app=express();
app.use(bodyParser.json());
app.use(CORS());

app.get("/", (req, res)=>{res.send(database.users)});
app.post("/SignIn", (req,res) => {signin.handleSignIn(req,res, db, bcrypt)});
app.post("/Register", (req,res) => {register.handleRegister(req,res,db,bcrypt)});
app.get("/Profile/:id",  (req,res) => {profile.handleProfile(req, res, db)});
app.put("/Image",  (req,res) => {image.handleImage(req, res, db)});
app.post("/ImageURL", (req,res) => {image.handleAPICall(req, res)});

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`app is running on port ${process.env.PORT}`);
});