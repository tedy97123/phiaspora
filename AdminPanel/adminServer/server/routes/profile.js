import express, { Router } from 'express';
import User from '../models/Users';
var router = express.Router();

router.get('/generate-user', async(res,req) => {
try{
const users = await User.find()
res.status(200).json(users);
} catch(error) {
   res.statusCode(400).json({message: error.message});
}
});

export default router