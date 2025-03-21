const connectDB = require("../DB/db.Connect");

async function Upload_Properties(req, res) {
  try {
    const db = await connectDB();
    const collection = db.collection("Property");
    const {
      property_Id,
      owner_Id,
      title,
      description,
      location,
      address,
      zipCode,
      propertyType,
      category,
      size,
      price,
      bedrooms,
      bathrooms,
      images: [],
      propertyIdentityType,
      propertyProof: [],
      amenities: [],
      identityType,
      identityId,
    } = req.body;
    await collection.insertOne({
      property_Id,
      owner_Id,
      title,
      description,
      location,
      address,
      zipCode,
      propertyType,
      category,
      size,
      price,
      bedrooms,
      bathrooms,
      images: [],
      propertyIdentityType,
      propertyProof: [],
      amenities: [],
      identityType,
      identityId,
    });
    return res.status(200).json({ message: "Property upload Successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server error" });
  }
}

module.exports = { Upload_Properties };
