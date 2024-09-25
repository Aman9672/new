const mongoose = require("mongoose"); 
const URL = "mongodb+srv://dev5cespl:Sr8zJGeBQpi8WSl4@cluster0.ad4x3.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"; 

const connectDb = async () => {
  try {
    await mongoose.connect(URL);
    console.log('connected');
  } catch (error) {
    console.error("Connection error");
    process.exit(1);
  }
};

module.exports = connectDb;