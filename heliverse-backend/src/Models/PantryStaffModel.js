import mongoose from "mongoose";

const pantryStaffSchema = new mongoose.Schema({
    authId: { type: mongoose.Schema.Types.ObjectId, ref: "Auth", required: true },
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    location: { type: String, required: true}
})


export const pantryStaffModel = new mongoose.model("pantryStaff", pantryStaffSchema);