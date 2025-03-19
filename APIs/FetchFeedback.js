const connectDB = require("../DB/db.Connect");

async function FetchFeedback(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Feedback");
    const userData = await collection.find().toArray();
    if (userData.length == 0) {
      res.status(400).json({ message: "No Feedback found" });
    } else {
      res.status(200).json({ message: "Feedback Found", Data: userData });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { FetchFeedback };
