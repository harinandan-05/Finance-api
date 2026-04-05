import {Request , Response ,  NextFunction } from "express";



export const Rolemiddleware = (role:string[]) => {
    return (req:any,res:any,next:any) => {
        if(!req.user || !role.includes(req.user.role)){
            return res.status(403).json({msg:"Forbidden entry"})
        }
        next();
    }
}