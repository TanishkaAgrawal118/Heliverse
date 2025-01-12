import mongoose from "mongoose";

const dietSchema = new mongoose.Schema({
    patientID: [{ type: mongoose.Schema.Types.ObjectId, ref: "patient"}],
    instruction: { type: String},
    date: { type: Date, default: Date.now()},
    ingredients: { type: String},
    shift: { type: String, enum: ["morning", "evening","night"]}
})


export const dietModel = new mongoose.Model("diet", dietSchema);