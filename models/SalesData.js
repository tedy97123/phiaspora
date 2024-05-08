import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SalesData = new Schema(
  {
    tage: String,
    title: String,
    desc:String,
    image: [
      {
         data:Buffer,type:Schema.Types.String
      },
    ], 
     productId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ], 
  },
  { timestamps: true, toJSON: { getters: true } }
);

const salesData = mongoose.model("SalesData", SalesData);
export default salesData;
