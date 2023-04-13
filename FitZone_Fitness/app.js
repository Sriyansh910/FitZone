const express = require("express");
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.listen(3000);

const authRouter = express.Router();

//Base route
app.use("/auth",authRouter);

//All the required functions
authRouter
.route('/signup')
.get(getSignUp)
.post(postSignUp);

//Creating functions
//Basically sending the html file of signup to user in frontend
function getSignUp (req,res){
    res.sendFile('/Signup/signup.html',{root:__dirname});
}

function postSignUp(req,res){
    let obj=req.body;
    console.log('Backend',obj);
    res.json({
        message:"User signed up",
        data:obj
    }); 
}
 
const db_link='mongodb+srv://admin:Shiv1906@cluster0.cnq94yq.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db_link)
.then(function(db){
    console.log(db);
    console.log('db connected');
})
.catch(function(err){
    console.log(err);
});