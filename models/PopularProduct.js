import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NewProductSchema = new Schema(
  {
    id:Number,
    image:String,
    tag:String,
    name:String,
    amount:String,
    desRate:String,
    offer:Boolean,
    desc:String
  },
  { timestamps: true, toJSON: { getters: true } }
);

const NewProducts = mongoose.model("NewProducts", NewProductSchema);
export default NewProducts;
