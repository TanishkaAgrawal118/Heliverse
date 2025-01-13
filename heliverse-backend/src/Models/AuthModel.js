import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  password: { type: String, required: true },
  role: { type: String, enum: ["Admin", "PantryStaff", "DeliveryPerson", "Patient"], required: true },
  createdAt: { type: Date, default: Date.now},
});

export const authModel = new mongoose.model("auth", authSchema);