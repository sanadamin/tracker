import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let TaskSchema = new Schema({
  tasklat:String,
  tasklong:String,
  sitename: String,
  taskname: String,
  taskcat: String,
  taskassignedto: String,
  taskdate:String,
  taskstarttime: String,
  taskarivaltime:String,
  acknowledge : String,
  acknowledgetime: String,
  description: String,
  closingtime:String






});
module.exports = mongoose.model('TaskaPPROVAL',TaskSchema);
