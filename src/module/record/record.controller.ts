import { Request , Response } from "express"
import { CreateRecord, deleteRecord, getRecord, getRecordById, updateRecord } from "./record.service"

export const recordCreateControl = async(req:any,res:Response) => {
    const data = {
        ...req.body,
        userId:req.user.id
    }

    const result = await CreateRecord(data);
    if(!result){
        return res.status(400).json({msg:"not able to process the request"})
    }

    return res.status(200).json({msg:"record created successfully",data:result})
}

export const recordGetFilterController = async(req:any,res:any) => {
    const result = await getRecord(
        req.user.id,
        req.query
    )

    if(!result){
        return res.status(400).json({msg:"not able to process request"})
    }

    return res.status(200).json({msg:"record fetched succefully",data:result})
}


export const getRecordbyidController = async(req:any,res:any) => {
    const result = await getRecordById(
        req.user.id,
        req.params.recordId
    )

     if(!result){
        return res.status(400).json({msg:"not able to process request"})
    }

    return res.status(200).json({msg:"record fetched succefully by id",data:result})
}

export const deleteRecorController = async(req:any,res:any) => {
    const result = await deleteRecord(
        req.user.id,
        req.params.recordId
    )
    
    if(!result){
        return res.status(400).json({msg:"not able to process request"})
    }

    return res.status(200).json({msg:"record deleted succefully by id",data:result})   
}

export const updateRecordController = async(req:any,res:any) => {
    const result = await updateRecord(
        req.user.id,
        req.params.recordId,
        req.body
    )
    
    if(!result){
        return res.status(400).json({msg:"not able to process request"})
    }

    return res.status(200).json({msg:"record updated succefully by id",data:result})   
}