
class CustomErrorHandler extends Error{
    constructor(status,msg){
        super()
        this.status = status;
        this.msg = msg;
    }
    static alredayExits(message='User already exist'){
        return new CustomErrorHandler(409,message)
    }
    static wrongCrendential(message='Username or password is wrong'){
        return new CustomErrorHandler(401,message)
    }
    static unAuthorized(message='unAuthorized'){
        return new CustomErrorHandler(401,message);
    }
    static notFound(message='user not found'){
        return new CustomErrorHandler(400,message);
    }
    static serverError(message='Internal server error'){
        return new CustomErrorHandler(400,message);
    }
}

export default CustomErrorHandler