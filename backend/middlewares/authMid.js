import auth from "../models/auth.js";
import CustomErrorHandler from "../services/CustomErrorHandler.js";
import JwtService from "../services/JwtService.js";


const authMid = async (req,res,next)=>{
    let authHeader = req.headers.authorization;    
    const data = await JwtService.verify(authHeader)
    if (!authHeader) {
        return next(CustomErrorHandler.unAuthorized());
    }  
    try {
        
        const data = await JwtService.verify(authHeader)
        console.log(data) 
        const user = {
           email:data.email
        }

        try {
            const exist = await auth.exists({email:user.email});
            if (!exist) {
                return next(CustomErrorHandler.unAuthorized())
            }
        } catch (err) {
            return next(err);
        }
       

        req.user = user;       
        next();
        
    } catch (err) {
        return next(CustomErrorHandler.unAuthorized());
    }
}
export default authMid;