const connectDB = require("../DB/db.Connect");

async function Payment(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Payment");
    const {
      payment_Id,
      user_Id,
      admin_Id,
      booking_Id,
      amount,
      paymentDate,
      paymentMethod,
      transaction_Id,
      status,
    } = req.body;
    await collection.insertOne({
      payment_Id,
      user_Id,
      admin_Id,
      booking_Id,
      amount,
      paymentDate,
      paymentMethod,
      transaction_Id,
      status,
    });
    return res.status(200).json({ message: "Data Stored Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}

module.exports = { Payment };
