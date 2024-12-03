const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const mongo_url = process.env.MONGO_CONN;
mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("MongoDB Connected...");

    const fetchData = mongoose.connection.db.collection("Food_Item");
    fetchData.find({}).toArray(function (err, data) {
      global.Foods_Item
      =data;
     
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Error: ", err);
  });
