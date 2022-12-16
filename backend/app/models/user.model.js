const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    blind75: { type: [Number] },
    top150: { type: [Number] },
    all305: { type: [Number] },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ],
    
  })
);

module.exports = User;
