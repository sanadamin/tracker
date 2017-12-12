import mongoose from 'mongoose';
import FoodTruck from './foodtruck';
let Schema = mongoose.Schema;

let SitesSchema = new Schema({
  sitename: String,
  coordinates:{
    lat: String,
    long:String
  }

});

module.exports = mongoose.model('Site',SitesSchema);
