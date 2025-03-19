const connectDB = require("../DB/db.Connect");

async function Register_Owner(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Register");

    const { l_Id, firstName, lastName, email, phoneNo, password } = req.body;

    await collection.insertOne({
      l_Id,
      firstName,
      lastName,
      email,
      phoneNo,
      password,
    });
    return res.status(200).json({ message: "Owner Create Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server Error" });
  }
}

module.exports = { Register_Owner };
