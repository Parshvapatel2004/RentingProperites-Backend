const connectDB = require("../DB/db.Connect");

async function Make_Booking(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Booking");
    const { booking_Id, user_Id, property_Id, owner_Id, startDate, endDate } =
      req.body;
    await collection.insertOne({
      booking_Id,
      user_Id,
      property_Id,
      owner_Id,
      bookingDate: new Date(),
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      status: "Pending",
    });
    return res.status(200).json({ message: "Booking created Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}

module.exports = { Make_Booking };
