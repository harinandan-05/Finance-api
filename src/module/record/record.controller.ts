import { Request , Response } from "express"
import { CreateRecord, getRecord, getRecordById } from "./record.service"

export const recordCreateControl = async(req:any,res:Response) => {
    const data = {
        ...req.body,
        userId:req.user.id
    }

    const result = await CreateRecord(data);
    if(!result){
        return res.status(400).json({msg:"not able to process the request"})
    }

    return res.status(200).json({msg:"record created successfully"})
}

export const recordGetController = async(req:any,res:any) => {
    const result = await getRecord(
        req.user.id,
        req.body.filter
    )

    if(!result){
        return res.status(400).json({msg:"not able to process request"})
    }

    return res.status(200).json({msg:"record fetched succefully"})
}


export const getRecordbyidController = async(req:any,res:any) => {
    const result = await getRecordById(
        req.user.id,
        req.body.recordId
    )

     if(!result){
        return res.status(400).json({msg:"not able to process request"})
    }

    return res.status(200).json({msg:"record fetched succefully by id"})
}