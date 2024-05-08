import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategoriesSchema = new Schema(
  {
    images:String,
    title:String,

  },
  { timestamps: true, toJSON: { getters: true } }
);

const Categories = mongoose.model("CartSchema", CategoriesSchema);
export default Categories;
