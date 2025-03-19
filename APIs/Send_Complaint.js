const connectDB = require("../DB/db.Connect");

async function Send_Complaint(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Complaint");
    const {
      c_Id,
      user_Id,
      owner_Id,
      name,
      email,
      phone,
      role,
      complaint,
      status,
      response,
    } = req.body;
    await collection.insertOne({
      c_Id,
      user_Id,
      owner_Id,
      name,
      email,
      phone,
      role,
      complaint,
      status: "Pending",
      response,
    });
    return res.status(200).json({ message: "Complaint sent Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server Error" });
  }
}

module.exports = { Send_Complaint };
