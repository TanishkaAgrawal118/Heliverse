import { StatusCodes } from "http-status-codes";
import { patientModel } from "../Models/PatientModel.js";

export async function savePatient(req, res){
    try {
        const patient = new patientModel(req.body);
        const savedPatient = await patient.save();
        res.status(StatusCodes.CREATED).json(savedPatient);
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
}
