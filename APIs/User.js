const connectDB = require("../DB/db.Connect");

async function User(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("User");
    const {
      user_Id,
      userName,
      email,
      password,
      phoneNo,
      firstName,
      lastName,
    } = req.body;
    await collection.insertOne({
      user_Id,
      userName,
      email,
      password,
      phoneNo,
      firstName,
      lastName,
    });
    return res.status(200).json({ message: "Data stored Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
module.exports = { User };
