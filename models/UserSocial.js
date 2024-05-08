import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSocialSchema = new Schema(
  {
    icon: String,
    title: String,
    placeholder:String,
    desc:String,
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

const UserSocial = mongoose.model("UserSocial", UserSocialSchema);
export default UserSocial;
