import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    Name: {type:String,require:true},
    Password:{type:String,require:true},
    email:{type:String,require:true},
    bio:{type:String,require:true},
    image: [
      {
         data:Buffer,
         type:Schema.Types.String,
      },
    ], 
  },
  { timestamps: true, toJSON: { getters: true } }
);

const User = mongoose.model("User", UserSchema);
export default User;