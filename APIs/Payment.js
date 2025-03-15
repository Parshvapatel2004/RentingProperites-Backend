const connectDB = require("../DB/db.Connect");

async function Payment(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Payment");
    const {
      Payment_Id,
      User_Id,
      Admin_Id,
      Booking_Id,
      Amount,
      Payment_Date,
      Payment_Method,
      Transaction_Id,
      Status,
    } = req.body;
    await collection.insertOne({
      Payment_Id,
      User_Id,
      Admin_Id,
      Booking_Id,
      Amount,
      Payment_Date,
      Payment_Method,
      Transaction_Id,
      Status,
    });
    return res.status(200).json({ message: "Data Stored Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}

module.exports = { Payment };
