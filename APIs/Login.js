const connectDB = require("../DB/db.Connect");

async function Login(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Login");

    const { L_id, FirstName, LastName, Email, PhoneNo, Password } = req.body;

    await collection.insertOne({
      L_id,
      FirstName,
      LastName,
      Email,
      PhoneNo,
      Password,
    });
    return res.status(200).json({ message: "Data Stored Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server Error" });
  }
}

module.exports = { Login };
