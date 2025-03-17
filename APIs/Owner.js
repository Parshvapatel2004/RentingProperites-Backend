const connectDB = require("../DB/db.Connect");

async function Owner(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Owner");
    const {
      owner_Id,
      identity_Id,
      firstName,
      lastName,
      email,
      password,
      phoneNo,
      address,
    } = req.body;
    await collection.insertOne({
      owner_Id,
      identity_Id,
      firstName,
      lastName,
      email,
      password,
      phoneNo,
      address,
    });
    return res.status(200).json({ message: "Data store Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { Owner };
