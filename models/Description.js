import mongoose from "mongoose";

const Schema = mongoose.Schema;

const DescriptionSchema = new Schema(
  {
    productName: String,
    productDescription: String,
    category:String,
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

const Description = mongoose.model("Description", DescriptionSchema);
export default Description;
