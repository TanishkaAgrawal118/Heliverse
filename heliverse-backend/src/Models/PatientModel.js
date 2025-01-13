import mongoose, { mongo } from "mongoose";

const patientSchema = new mongoose.Schema({
  authId: { type: mongoose.Schema.Types.ObjectId, ref: "Auth", required: true },
  name: { type: String, required: true},
  diseases: { type: String},
  allergies: { type: String},
  password:{ type: String, required: true},
  roomNo: { type: String , required: true},
  bedNo: { type: String, required: true},
  floorNo: { type: Number, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["male", "female", "Other"], required: true },
  contact: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  date: { type: Date, default: Date.now() },
  address:{ type: String}
});

export const patientModel = new mongoose.model("patient", patientSchema) ;