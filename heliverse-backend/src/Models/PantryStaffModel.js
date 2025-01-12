import mongoose from "mongoose";

const pantryStaffSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    location: { type: String, required: true}
})


export const pantryStaffModel = new mongoose.model("pantryStaff", pantryStaffSchema);