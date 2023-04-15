// const { request, response } = require('express');
//import express_module 
const express = require('express')
//calling Router_function of express
const routes = express.Router();

routes.get("/mind", (request,response) => {
    response.render("index");
})
routes.get("/signup", (request,response) => {
    response.render("signupPage");
})

routes.get('/mind/oneRep' , (request,response)=>{
    response.render("oneRep");
})
routes.get('/mind/oneRep/healthyWeightLoss' , (request,response)=>{
    response.render("healthyWeightLoss");
})

//export routes 
module.exports = routes
