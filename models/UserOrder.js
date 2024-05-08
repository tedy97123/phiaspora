import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserOrderSchema = new Schema(
  {
    no: String,
    date:String,
    status:String,
    total:String,
    item:String,
    userId: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ], 
  },
  { timestamps: true, toJSON: { getters: true } }
);

const UserOrder = mongoose.model("UserOrderSchema", UserOrderSchema);
export default UserOrder;
