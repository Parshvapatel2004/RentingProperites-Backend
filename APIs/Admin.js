const connectDB = require("../DB/db.Connect");

async function Admin(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Admin");
    const { Admin_id, FirstName, LastName, Email, Password } = req.body;
    await collection.insertOne({
      Admin_id,
      FirstName,
      LastName,
      Email,
      Password,
    });
    return res.status(200).json({ message: "Data Stored Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}

module.exports = { Admin };
