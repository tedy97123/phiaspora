import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PaymentMethodSchema = new Schema(
  {
    name: String,
    expires:String,
    image: [
      {
         data:Buffer,type:Schema.Types.String
      },
    ], 
    userId: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ], 
  },
  { timestamps: true, toJSON: { getters: true } }
);

const PaymentMethod = mongoose.model("Payment", PaymentMethodSchema);
export default PaymentMethod;
