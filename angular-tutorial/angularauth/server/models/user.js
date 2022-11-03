const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: String,
    password: String
});

// model(modelname, schema, collection)
// model to create read delet update data in the database.
module.exports = mongoose.model('user', userSchema, 'users');
