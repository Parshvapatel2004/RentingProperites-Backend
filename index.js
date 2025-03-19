const dbConnect = require("./DB/db.Connect");
const express = require("express");
const cors = require("cors");
const { Register_User } = require("./APIs/Register_User");
const { User } = require("./APIs/User");
const { Booking } = require("./APIs/Booking");
const { Payment } = require("./APIs/Payment");
const { Upload_Properties } = require("./APIs/Upload_Properties");
const { Register_Owner } = require("./APIs/Register_Owner");
const { Send_Inquiry } = require("./APIs/Send_Inquiry");
const { Send_Feedback } = require("./APIs/Send_Feedback");
const { Send_Request } = require("./APIs/Send_Request");
const { contactUs } = require("./APIs/contactUs");
const { FetchAllUser } = require("./APIs/FetchAllUser");
const { PropertyFetch } = require("./APIs/PropertyFetch");
const { Login } = require("./APIs/Login");

//connecting to database:
dbConnect();

//middlewares:
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.post("/register_user", Register_User);
app.post("/register_owner", Register_Owner);
app.post("/user", User);
app.post("/booking", Booking);
app.post("/send_request", Send_Request);
app.post("/payment", Payment);
app.post("/send_feedback", Send_Feedback);
app.post("/upload_properties", Upload_Properties);
app.post("/send_inquiry", Send_Inquiry);
app.post("/contact_us", contactUs);
app.get("/fetchalluser", FetchAllUser);
app.get("/property_fetch", PropertyFetch);
app.post("/login", Login);

//port:
const PORT = 8000;
app.listen(PORT);
//console.log(`Server is listing on port http:localhost:${PORT}`);
