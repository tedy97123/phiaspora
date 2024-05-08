import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    images:String,
    name:String,
    qtn:String,
    price:Number,
    productId:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
        }
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

const Cart = mongoose.model("CartSchema", CartSchema);
export default Cart;
