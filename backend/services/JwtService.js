import { JWT_SECRET } from "../config/index.js";
import  jwt  from "jsonwebtoken";


class JwtService{
    static sign(payload,expiry='6600000s',secret=JWT_SECRET){
        return jwt.sign(payload,secret,{expiresIn:expiry})
    }
    static verify(payload,secret=JWT_SECRET){
         return jwt.verify(payload,secret,(err, verifiedJwt) => {
            if(err){
              return err.message
            }else{
              return verifiedJwt
            }
          })
    }
}

export default JwtService