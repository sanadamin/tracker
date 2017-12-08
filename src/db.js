import mongoose from 'mongoose';
import config from './config'
export default callBack =>{
  let db = mongoose.connect(config.mongourl);
  callBack(db)
}
