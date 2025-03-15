const connectDB = require("../DB/db.Connect");

async function Owner(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Owner");
    const {
      Owner_id,
      Identity_id,
      FirstName,
      LastName,
      Email,
      Password,
      PhoneNo,
      Address,
    } = req.body;
    await collection.insertOne({
      Owner_id,
      Identity_id,
      FirstName,
      LastName,
      Email,
      Password,
      PhoneNo,
      Address,
    });
    return res.status(200).json({ message: "Data store Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = { Owner };
