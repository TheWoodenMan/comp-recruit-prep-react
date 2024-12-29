import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = model('User', new Schema({
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exists"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
  }
    }));

export default User
