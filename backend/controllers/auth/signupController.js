import Joi from "joi"

import auth from "../../models/auth.js";
import CustomErrorHandler from "../../services/CustomErrorHandler.js";


const signupController = {
    async signup(req,res,next){

        // validation
        
        const signupSchema = Joi.object({
            email:Joi.string().email().required(),
            password:Joi.string().regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/).required()
        })

        const {error} = signupSchema.validate(req.body); 
        if (error) {
            return next(error)
        }

         //check if user is already exist in database

        try {
            const exist = await auth.exists({email:req.body.email});
            if (exist) {
                return next(CustomErrorHandler.alredayExits('email is already exist'))
            }
        } catch (err) {
            return next(err);
        }

         const {email,password} = req.body;

         //hashed the password

       

         //prepare the model

        const user = new auth({
            email,
            password
        })

        try {
            const result = await user.save();
        } catch (err) {
            return next(err)
        }

         res.json({status:1,message:'sucessfully signup'})
    }
}

export default signupController