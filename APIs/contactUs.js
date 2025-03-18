const connectDB = require("../DB/db.Connect");

async function contactUs(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("ContactUs");
    const { name, email, phone, subject, message } = req.body;
    await collection.insertOne({
      name,
      email,
      phone,
      subject,
      message,
    });
    return res.status(200).json({ message: "Thanks your message received " });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}

module.exports = { contactUs };
