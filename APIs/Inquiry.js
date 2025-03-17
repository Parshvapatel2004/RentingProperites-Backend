const connectDB = require("../DB/db.Connect");

async function Inquiry(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Inquiry");
    const {
      inquiry_Id,
      user_Id,
      inquiryDate,
      subject,
      status,
      resolutionDate,
    } = req.body;
    await collection.insertOne({
      inquiry_Id,
      user_Id,
      inquiryDate,
      subject,
      status,
      resolutionDate,
    });
    return res.status(200).json({ message: "Data Stored Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}

module.exports = { Inquiry };
