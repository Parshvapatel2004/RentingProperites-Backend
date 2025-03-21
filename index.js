const dbConnect = require("./DB/db.Connect");
const express = require("express");
const cors = require("cors");
const { Register_User } = require("./APIs/Register_User");
const { User } = require("./APIs/User");
const { Upload_Properties } = require("./APIs/Upload_Properties");
const { Register_Owner } = require("./APIs/Register_Owner");
const { Send_Inquiry } = require("./APIs/Send_Inquiry");
const { Send_Feedback } = require("./APIs/Send_Feedback");
const { Send_Request } = require("./APIs/Send_Request");
const { contactUs } = require("./APIs/contactUs");
const { FetchAllUser } = require("./APIs/FetchAllUser");
const { Login } = require("./APIs/Login");
const { FetchRequest } = require("./APIs/FetchRequest");
const { FetchFeedback } = require("./APIs/FetchFeedback");
const { FetchAllOwner } = require("./APIs/FetchAllOwner");
const { FetchInquiry } = require("./APIs/FetchInquiry");
const { Send_Complaint } = require("./APIs/Send_Complaint");
const { FetchAllComplaint } = require("./APIs/FetchAllComplaint");
const { Make_Booking } = require("./APIs/Make_Booking");
const { FetchAllBooking } = require("./APIs/FetchAllBooking");
const { FetchAllProperty } = require("./APIs/FetchAllProperty");
const { FetchAllPayments } = require("./APIs/FetchAllPayments");
const { Make_Payment } = require("./APIs/Make_payment");
const { manage_booking } = require("./APIs/manage_booking");
const { manage_property } = require("./APIs/manage_property");
const { view_payments } = require("./APIs/view_payment");

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
app.post("/makebooking", Make_Booking);
app.post("/send_request", Send_Request);
app.post("/make_payment", Make_Payment);
app.post("/send_feedback", Send_Feedback);
app.post("/upload_properties", Upload_Properties);
app.post("/send_inquiry", Send_Inquiry);
app.post("/contact_us", contactUs);
app.get("/fetchalluser", FetchAllUser);
app.get("/fetchallproperty", FetchAllProperty);
app.post("/login", Login);
app.get("/fetchrequest", FetchRequest);
app.get("/fetchfeedback", FetchFeedback);
app.get("/fetchallowner", FetchAllOwner);
app.get("/fetchinquiry", FetchInquiry);
app.post("/sendcomplaint", Send_Complaint);
app.get("/fetchcomplaint", FetchAllComplaint);
app.get("/fetchallbookings", FetchAllBooking);
app.get("/fetchallpayment", FetchAllPayments);
app.get("/manage_booking", manage_booking);
app.get("/manage_property", manage_property);
app.get("/view_payment", view_payments);

//port:
const PORT = 8000;
app.listen(PORT);
//console.log(`Server is listing on port http:localhost:${PORT}`);
