const  { Schema } = require("mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
  },
});


module.exports = {UserSchema};
