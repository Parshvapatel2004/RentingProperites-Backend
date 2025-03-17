const connectDB = require("../DB/db.Connect");

async function Feedback(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Feedback");
    const { feedback_Id, user_Id, owner_Id, feedbackDate, rating, comments } =
      req.body;
    await collection.insertOne({
      feedback_Id,
      user_Id,
      owner_Id,
      feedbackDate,
      rating,
      comments,
    });
    return res.status(200).json({ message: "Data Stored Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}

module.exports = { Feedback };
