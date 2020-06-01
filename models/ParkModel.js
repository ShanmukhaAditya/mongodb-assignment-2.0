const mongoose=require('mongoose')
const Schema=mongoose.Schema
const ParkSchema=new Schema({
  name:String;
  location:String;
  ranking:Number
})
model.exports=mongoose.model('park',ParkSchema)
