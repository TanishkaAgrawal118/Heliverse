import mongoose, { mongo } from "mongoose";

const patientSchema = new mongoose.Schema({
  name: { type: String},
  diseases: { type: String},
  allergies: { type: String},
  roomNo: { type: String },
  bedNo: { type: String },
  floorNo: { type: Number, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
  contact: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  date: { type: Date, default: Date.now() },
});

export const patientModel = new mongoose.model("patient", patientSchema) ;