import express, { response } from "express";
import User from "../models/User.js";

const router = express.Router(); 

router.post("/Login", async (req, res) => {
   const { email, password } = req.body; 
  try {
   let user = await User.findOne({'email':email  , 'password':password}); 
   if(!user){
       res.status(404).json({ message: "User not found" })
   } else {
         const returnedUserObject = {
          'id': user.id,
         "firstName": user.firstName,
         "lastName": user.lastName,
         "email": user.email,
      };
      res.status(200).json({currentUser:returnedUserObject}) 
   }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;