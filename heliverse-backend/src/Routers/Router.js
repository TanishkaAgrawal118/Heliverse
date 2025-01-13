import express from 'express';
import path from 'path';
import { savePatient } from '../Controllers/PatientController.js';
import { savePantryStaff } from '../Controllers/PantryStaffController.js';
import { managerRegister } from '../Controllers/ManagerController.js';
import { login } from '../middleware/isAuthorised.js';
import { authRegister } from '../Controllers/AuthController.js';

const router = express.Router();

router.post('/savePatient',savePatient);
router.post('/savePantryStaff',savePantryStaff);
router.post('/saveManager',managerRegister);
router.post('/saveAuth', authRegister);
router.post('/login',login);

export default router;