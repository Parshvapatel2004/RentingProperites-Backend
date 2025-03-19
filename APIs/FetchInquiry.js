const connectDB = require("../DB/db.Connect");

async function FetchInquiry(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Inquiry");
    const userData = await collection.find().toArray();
    if (userData.length == 0) {
      res.status(400).json({ message: "No Inquiry found" });
    } else {
      res.status(200).json({ message: "Inquiry Found", Data: userData });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { FetchInquiry };
