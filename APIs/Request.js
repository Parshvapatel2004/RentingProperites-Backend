const connectDB = require("../DB/db.Connect");

async function Request(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Request");
    const {
      Request_Id,
      User_Id,
      Property_Id,
      Owner_Id,
      StartDate,
      EndDate,
      Status,
    } = req.body;
    await collection.insertOne({
      Request_Id,
      User_Id,
      Property_Id,
      Owner_Id,
      StartDate,
      EndDate,
      Status,
    });
    return res.status(200).json({ message: "Data Stored Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}

module.exports = { Request };
