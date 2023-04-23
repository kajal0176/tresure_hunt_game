import express from 'express';
import loginController from '../controllers/auth/loginController.js';
import signupController from '../controllers/auth/signupController.js';
import userInfoController from '../controllers/user/userInfoController.js';
import authMid from '../middlewares/authMid.js';



const router = express.Router();


router.post('/signup',signupController.signup)
router.post('/login',loginController.login)
router.get('/registerdUser',authMid,userInfoController.userRegisterdGet)
router.get('/userInfo',authMid,userInfoController.userInfoGet)
router.get('/userInfo/:_id',authMid,userInfoController.userInfoGetById)
router.post('/userInfo',authMid,userInfoController.userInfoCreate)
router.put('/userInfo',authMid,userInfoController.userInfoUpdate)

export default router