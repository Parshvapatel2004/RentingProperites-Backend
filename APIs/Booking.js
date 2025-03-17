const connectDB = require("../DB/db.Connect");

async function Booking(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Booking");
    const {
      booking_Id,
      user_Id,
      property_Id,
      owner_Id,
      bookingDate,
      startDate,
      endDate,
      status,
    } = req.body;
    await collection.insertOne({
      booking_Id,
      user_Id,
      property_Id,
      owner_Id,
      bookingDate,
      startDate,
      endDate,
      status,
    });
    return res.status(200).json({ message: "Data Stored Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}

module.exports = { Booking };
