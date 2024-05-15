import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    Name: String,
    Password:String,
    email:String,
    bio:String
  },
  { timestamps: true, toJSON: { getters: true } }
);

const User = mongoose.model("User", UserSchema);
export default User;