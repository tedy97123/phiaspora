import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PersonSchema = new Schema(
  {
    Name: String,
    age: String,
    email:String,
    bio:String
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Person = mongoose.model("Person", PersonSchema);
export default Person;