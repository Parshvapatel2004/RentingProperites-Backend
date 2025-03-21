const connectDB = require("../DB/db.Connect");

async function Make_Payment(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Payment");
    const {
      payment_Id,
      user_Id,
      peoperty_Id,
      owner_Id,
      booking_Id,
      amount,
      paymentMethod,
      transaction_Id,
    } = req.body;
    await collection.insertOne({
      payment_Id,
      user_Id,
      peoperty_Id,
      owner_Id,
      booking_Id,
      amount,
      paymentDate: new Date().toISOString().split("T")[0],
      paymentMethod,
      transaction_Id,
      status: "pending",
    });
    return res.status(200).json({ message: "Payment made Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}

module.exports = { Make_Payment };
