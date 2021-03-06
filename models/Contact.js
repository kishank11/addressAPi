const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;
const jwt =require("jwt");
// Create Schema
const ContactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
    validate: {
      validator: function(email) {
        return validator.isEmail(email);
      },
      message: (props) => `${props.value} is not a valid email.`,
    },
  },
  mobile: {
    type: Number,
  },
  token: { type: String }
});

const Contact = mongoose.model('contact', ContactSchema);

module.exports = Contact;
