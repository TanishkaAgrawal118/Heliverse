import express from 'express';
import path from 'path';
import { savePatient } from '../Controllers/PatientController.js';
import { savePantryStaff } from '../Controllers/PantryStaffController.js';

const router = express.Router();

router.post('/savePatient',savePatient);
router.post('/savePantryStaff',savePantryStaff);

export default router;