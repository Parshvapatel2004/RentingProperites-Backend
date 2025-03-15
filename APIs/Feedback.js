const connectDB = require("../DB/db.Connect");

async function Feedback(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Feedback");
    const { Feedback_Id, User_Id, FeedbackDate, Rating, Comments } = req.body;
    await collection.insertOne({
      Feedback_Id,
      User_Id,
      FeedbackDate,
      Rating,
      Comments,
    });
    return res.status(200).json({ message: "Data Stored Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}

module.exports = { Feedback };
