const connectDB = require("../DB/db.Connect");

async function FetchOwnerUserApi(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Login");
    const userData = await collection.find().toArray();
    if (userData.length == 0) {
      res.status(400).json({ message: "No user found" });
    } else {
      res.status(200).json({ message: "Data Found", Data: userData });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { FetchOwnerUserApi };
