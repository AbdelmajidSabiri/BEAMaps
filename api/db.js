const express = require("express");
const cors = require("cors"); 
const { MongoClient } = require("mongodb");
require("dotenv").config({path:"./config.env"})

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000;
let db;

async function connectToDatabase() {

  const dbu = process.env.ATLAS_URI
  const client = new MongoClient(dbu)


  
  try {
    await client.connect();
    db = client.db("BEAMaps");

    const collections = await db.collections()
    collections.forEach((collection) => console.log(collection.collectionName))

  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  }

}


//start the server and connect to MongoDB
connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
