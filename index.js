const dbConnect = require("./DB/db.Connect");
const express = require("express");
const cors = require("cors");
const { Login } = require("./APIs/Login");
const { Admin } = require("./APIs/Admin");

dbConnect();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/Login", Login);
app.post("/Admin", Admin);

const PORT = 8000;
app.listen(PORT);
