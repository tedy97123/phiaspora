import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserFavoriteItemSchema = new Schema(
  {
    name: String,
    rate:String,
    image: [
      {
         data:Buffer,type:Schema.Types.String
      },
    ], 
    descRate:String,
    userId: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ], 
  },
  { timestamps: true, toJSON: { getters: true } }
);

const UserFvtItem = mongoose.model("UserFavoriteItem", UserFavoriteItemSchema);
export default UserFvtItem;
