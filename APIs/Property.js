const connectDB = require("../DB/db.Connect");

async function Property(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Property");
    const {
      Property_Id,
      Property_Proof,
      Property_Name,
      Owner_id,
      Property_Type,
      Address,
      City,
      State,
      Rent,
      Square_Feet,
    } = req.body;
    await collection.insertOne({
      Property_Id,
      Property_Proof,
      Property_Name,
      Owner_id,
      Property_Type,
      Address,
      City,
      State,
      Rent,
      Square_Feet,
    });
    return res.status(200).json({ message: "Data Stored Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}

module.exports = { Property };
