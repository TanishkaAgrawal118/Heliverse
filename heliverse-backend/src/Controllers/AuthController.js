import bcrypt from "bcrypt";
import { authModel } from "../Models/AuthModel.js";



export async function authRegister(req, res) {
    try {
      const hashedPassword = bcrypt.hashSync(req.body.password, 12);
      req.body["password"] = hashedPassword;
  
      const existingManagerByEmail = await authModel.findOne({
        email: req.body.email,
      });
      if (existingManagerByEmail) {
        return res.status(400).json({ message: "Email already exists" });
      } else {
        const admin = new authModel(req.body);
        const result = await admin.save();
        result.password = undefined;
        return res.status(201).json(result);
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  }