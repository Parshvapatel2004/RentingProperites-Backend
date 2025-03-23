const connectDB = require("../DB/db.Connect");

async function Register_User(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Register");

    const { firstName, lastName, email, phoneNo, password } = req.body;

    await collection.insertOne({
      firstName,
      lastName,
      email,
      phoneNo,
      password,
    });
    return res.status(200).json({ message: "User Create Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server Error" });
  }
}

module.exports = { Register_User };
