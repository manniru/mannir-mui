const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');

const PersonSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  phone: { type: String },
  email: { type: String },
});

PersonSchema.plugin(unique, { message: 'That {PATH} is already taken.' });

const Person = module.exports = mongoose.model('person', PersonSchema);
