//import required modules
const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const Detail = require("./src/models/Detail");
//generate routes
const routes = require("./src/routes/main");

//calling express function from express_module
const app = express();

app.use('/static', express.static("public"));
app.use('',routes);

//(template engine)
app.set('view engine','hbs');
app.set("views","views");
hbs.registerPartials("views/partials");

//db connections 
// mongoose.connect("mongodb://localhost:27017/FitZone",{
//     useNewUrlParser:true,useUnifiedTopology:true
// },).then(() => console.log('connected Successfully'))
// .catch((err) => {console.error(err);});

app.listen(process.env.PORT | 2500, () => {
    console.log("Server is working");
});

