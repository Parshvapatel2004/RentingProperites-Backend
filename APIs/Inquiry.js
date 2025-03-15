const connectDB = require("../DB/db.Connect");

async function Inquiry(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Inquiry");
    const {
      Inquiry_Id,
      User_Id,
      Inquiry_Date,
      Subject,
      Status,
      ResolutionDate,
    } = req.body;
    await collection.insertOne({
      Inquiry_Id,
      User_Id,
      Inquiry_Date,
      Subject,
      Status,
      ResolutionDate,
    });
    return res.status(200).json({ message: "Data Stored Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}

module.exports = { Inquiry };
