const dbConnect = require('./DB/db.Connect');
const express = require("express");
const cors = require("cors");
const { Login } = require('./APIs/Login');


dbConnect();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.post("/Login",Login);

const PORT = 8000;
app.listen(PORT);