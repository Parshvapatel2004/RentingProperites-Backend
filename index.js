const dbConnect = require("./DB/db.Connect");
const express = require("express");
const cors = require("cors");
const { Login } = require("./APIs/Login");
const { Admin } = require("./APIs/Admin");
const { Owner } = require("./APIs/Owner");
const { User } = require("./APIs/User");
const { Booking } = require("./APIs/Booking");
const { Request } = require("./APIs/Request");
const { Payment } = require("./APIs/Payment");
const { Feedback } = require("./APIs/Feedback");
const { Property } = require("./APIs/Property");

dbConnect();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/Login", Login);
app.post("/Admin", Admin);
app.post("/Owner", Owner);
app.post("/User", User);
app.post("/Booking", Booking);
app.post("/Request", Request);
app.post("/Payment", Payment);
app.post("/Feedback", Feedback);
app.post("/Property", Property);

const PORT = 8000;
app.listen(PORT);
