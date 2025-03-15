const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://parshva:1234@trio.d0suf.mongodb.net/?retryWrites=true&w=majority&appName=Trio";
const client = new MongoClient(url);

async function connectToMongoDb(){
    try{
        // Dataconnectivity code
        await client.connect();
        console.log("Connected with mongoDB atlas");
        const database = client.db("RentingProperties");
        return database;
    }
    catch(error){
        console.log(error);
    }
}

module.exports = connectToMongoDb;
