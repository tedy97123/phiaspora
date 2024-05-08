import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserScema = new Schema(
  {
    username: String,
    email: String,
    password:String,
    image: [
      {
         data:Buffer,type:Schema.Types.String
      },
    ], 
  },
  { timestamps: true, toJSON: { getters: true } }
);

const User = mongoose.model("User", UserScema);
export default User;
