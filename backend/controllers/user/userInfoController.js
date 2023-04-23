import CustomErrorHandler from "../../services/CustomErrorHandler.js";
import Joi from "joi";

import JwtService from "../../services/JwtService.js";
import user from "../../models/user.js";
import auth from "../../models/auth.js";


const userInfoController = {
    async userInfoCreate(req,res,next){
      // console.log(req.body)
       const {email,userInfo} = req.body;

       const userInfoData = new user({
            email,
            userInfo
           })

    try {
        const result = await userInfoData.save();
        res.json({result})
    } catch (err) {
        return next(err)
    }

    },
    async userInfoGet(req,res,next){
       
        try {
            const result = await user.find();
            res.json({result})
        } catch (err) {
            return next(err)
        }
    
     },
    async userInfoGetById(req,res,next){
     
        try {
             console.log(req.params)
             const __user = await auth.findById(req.params._id)
             console.log(__user)
            if (__user._id) {
                const __userInfo = await user.findOne({email:__user.email})
                console.log(__userInfo)
                res.json(__userInfo)
            }
          
        } catch (error) {
            return next(error)
        }
      
 
     },
    async userRegisterdGet(req,res,next){
       
        try {
            const result = await auth.find();
            res.json({result})
        } catch (err) {
            return next(err)
        }
    
    },
    async userInfoUpdate(req,res,next){
       
        const {email,userInfo} = req.body;
        
         try {          
            if (req.body.userClueInfo) {
                const updateUserInfo = await user.findOneAndUpdate({email:email}, 
                    {$set:{userInfo:userInfo},$push: { userClueInfo:req.body.userClueInfo } },
                    {          
                      new: true
                    });
                   
                   res.json({updateUserInfo})
            }else{
                const updateUserInfo = await user.findOneAndUpdate({email:email}, 
                    {userInfo:userInfo},
                    {          
                      new: true
                    });
                   
                   res.json({updateUserInfo})
            }
         } catch (err) {
                return next(err)
            }
 
     },
   
}

export default userInfoController