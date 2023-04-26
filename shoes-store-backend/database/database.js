const mongoose = require("mongoose");

function DB() {
  mongoose
    .connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("🎦🔆😜😀😊😃connected to mongodb 😜😀😊😃🎦🔆"))
    .catch((e) => console.log(e));
}

module.exports = DB;
