const connectDB = require("../DB/db.Connect");

async function Booking(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Booking");
    const {
      Booking_Id,
      User_Id,
      Property_Id,
      Owner_Id,
      Booking_Date,
      StartDate,
      EndDate,
      Status,
    } = req.body;
    await collection.insertOne({
      Booking_Id,
      User_Id,
      Property_Id,
      Owner_Id,
      Booking_Date,
      StartDate,
      EndDate,
      Status,
    });
    return res.status(200).json({ message: "Data Stored Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}

module.exports = { Booking };
