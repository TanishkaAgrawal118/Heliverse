import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { authModel } from '../Models/AuthModel.js';
import { StatusCodes } from 'http-status-codes';



export async function login(request, response) {
    try {
      const admin = await authModel.findOne({ email: request.body.email });
      if (admin) {
        if (bcrypt.compareSync(request.body.password, admin.password)) {
          const token = jwt.sign({ id:admin._id }, "tanishka123");
          response.status(StatusCodes.OK).json({ token: token,  id: admin._id  });
        } else {
          response
            .status(StatusCodes.BAD_REQUEST)
            .json({ message: "Invalid password" });
        }
      } else {
        response
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Invalid email" });
      }
    } catch (error) {
      console.log(error);
      response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
  }
