import { Request , Response} from 'express'
import { loginUser, userRegister } from './auth.service'


interface loginReq {
    email:string,
    password:string
}

export const loginController = async (req:Request<{} ,{} , loginReq>,res:Response) => {
    try{
        const result = await loginUser(req.body)
        if(!result){
            return res.status(400).json({msg:"failed at controller level of login"})
        }

        res.status(200).json({msg:"user logged in",data:result})
    }catch(err){
        res.status(500).json({msg:"internal server error"})
    }
}


export const registerController = async(req:Request,res:Response) => {
    try{
        const result  = await userRegister(req.body)

        if(!result){
            return res.status(400).json({msg:"failed in controller ,  not able to resolve the request"})
        }

        res.status(200).json({msg:"successfully registerd", result})
    }catch(err){
        return res.status(500).json({msg:"internal server error"})
    }
}