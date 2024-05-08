import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
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

const User = mongoose.model("User", UserSchema);
export default User;
