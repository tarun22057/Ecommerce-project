const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;

const connectDataBase = () => {
  mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`CONNECTED TO DATA BASE ${data.connection.name}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDataBase;
