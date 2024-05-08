import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CollectionsSchema = new Schema(
  {
    image:String,
    name:String,
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Collections = mongoose.model("Collections", CollectionsSchema);
export default Collections;
