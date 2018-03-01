import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let Budget = new Schema({
    email: String,
    password: String
});
module.exports = mongoose.model('Budget', Budget);