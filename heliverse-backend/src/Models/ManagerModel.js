import mongoose from "mongoose";

const managerSchema = new mongoose.Schema({
    authId: { type: mongoose.Schema.Types.ObjectId, ref: "Auth", required: true },
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true}
})


export const managerModel = new mongoose.model("manager", managerSchema);