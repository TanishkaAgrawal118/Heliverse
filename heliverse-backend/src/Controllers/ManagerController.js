import bcrypt from "bcrypt";
import { managerModel } from "../Models/ManagerModel.js";


export async function managerRegister(req, res) {
    try {
      const hashedPassword = bcrypt.hashSync(req.body.password, 12);
      req.body["password"] = hashedPassword;
  
      const existingManagerByEmail = await managerModel.findOne({
        email: req.body.email,
      });
      if (existingManagerByEmail) {
        return res.status(400).json({ message: "Email already exists" });
      } else {
        const admin = new managerModel(req.body);
        const result = await admin.save();
        result.password = undefined;
        return res.status(201).json(result);
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json(err);
    }
  }

// export async function managerLogin(request, response) {
//     try {
//       const manager = await managerModel.findOne({ email: request.body.email });
//       if (manager) {
//         if (bcrypt.compareSync(request.body.password, manager.password)) {
//           const token = jwt.sign({ id: manager._id }, "tanishka123");
//           response.status(StatusCodes.OK).json({ token: token,  id: manager._id  });
//         } else {
//           response
//             .status(StatusCodes.BAD_REQUEST)
//             .json({ message: "Invalid password" });
//         }
//       } else {
//         response
//           .status(StatusCodes.BAD_REQUEST)
//           .json({ message: "Invalid email" });
//       }
//     } catch (error) {
//       console.log(error);
//       response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
//     }
//   }