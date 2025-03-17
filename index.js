const dbConnect = require("./DB/db.Connect");
const express = require("express");
const cors = require("cors");
const { Register_User } = require("./APIs/Register_User");
const { Admin } = require("./APIs/Admin");
const { Owner } = require("./APIs/Owner");
const { User } = require("./APIs/User");
const { Booking } = require("./APIs/Booking");
const { Request } = require("./APIs/Request");
const { Payment } = require("./APIs/Payment");
const { Feedback } = require("./APIs/Feedback");
const { Upload_Properties } = require("./APIs/Upload_Properties");
const { Inquiry } = require("./APIs/Inquiry");
const { Register_Owner } = require("./APIs/Register_Owner");

dbConnect();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/register_user", Register_User);
app.post("/register_owner", Register_Owner);
app.post("/admin", Admin);
app.post("/owner", Owner);
app.post("/user", User);
app.post("/booking", Booking);
app.post("/request", Request);
app.post("/payment", Payment);
app.post("/feedback", Feedback);
app.post("/upload-properties", Upload_Properties);
app.post("/inquiry", Inquiry);

const PORT = 8000;
app.listen(PORT);
