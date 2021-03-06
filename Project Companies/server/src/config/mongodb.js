const mongoose = require("mongoose");
const config = require("./environment");

const env = config.app.environment || "development";

const options = {
  useNewUrlParser: true
};

module.exports = callback => {
  mongoose.Promise = global.Promise;

  if (env === "development") mongoose.set("debug", true);

  mongoose.set("useCreateIndex", true);

  mongoose.connection.on("connected", function() {
    console.log("Mongoose default connection open to " + config.mongodb.host);
  });

  mongoose.connection.on("error", function(err) {
    console.log("Mongoose default connection error: " + err);
  });

  mongoose.connection.on("disconnected", function() {
    console.log("Mongoose default connection disconnected");
  });

  mongoose
    .connect(config.mongodb.host, options)
    .then(() => {
      callback(mongoose);
    })
    .catch(err => console.error(err.toString()));
};
