import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
  {
    Name: String,
    Password:String,
    email:String,
    bio:String
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Profile = mongoose.model("Profile", ProfileSchema);
export default Profile;