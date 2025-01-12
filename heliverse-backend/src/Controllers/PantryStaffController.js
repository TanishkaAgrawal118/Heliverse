import { StatusCodes } from "http-status-codes";
import { pantryStaffModel } from "../Models/PantryStaffModel.js";

export async function savePantryStaff(req, res){
    try {
        const staff = new pantryStaffModel(req.body);
        const savedStaff = await staff.save();
        res.status(StatusCodes.CREATED).json(savedStaff);
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}
