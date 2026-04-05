import record from "../../models/record"
import usermodel from "../../models/usermodel"


interface Record {
    userId:any,
    amount:number,
    type:string,
    catogory:string,
    notes:string
}

export const CreateRecord = async(data:Record) => {
    if(!data || !data.userId){
        throw new Error("Missing required data")
    }

    const userCheck = await usermodel.findById(data.userId)

    if(!userCheck){
        throw new Error("no user Found")
    }

    const NewRecord = await record.create({
        userId:data.userId,
        amount:data.amount,
        type:data.type,
        notes:data.notes,
        catogory:data.catogory
    })

    if(!NewRecord){
        throw new Error("failed to create new record")
    }

    return NewRecord
}

export const getRecord = async(userId:string,filter:any) =>{
    const query:any = {userId}
    if(filter.type){
        query.type = filter.type
    }

    if(filter.catogory){
        query.catogory = filter.catogory
    }

    const records = await record.find(query)

    return records;
}

export const getRecordById = async(userId:string,recordId:string) =>{
    const recordFind = await record.findById(recordId)

    if(!recordFind){
        throw new Error("no records found")
    }

    if(recordFind.userId?.toString() !== userId){
        throw new Error("unauthorized")
    }

    return recordFind;
}

export const deleteRecord = async(userId:string,recordId:string) => {
    
    const recordFind = await record.findById(recordId)

    if(!recordFind){
        throw new Error("no records found")
    }

    if(recordFind.userId?.toString() !== userId) {
        throw new Error("unauthorized")
    }

    await record.findByIdAndDelete(recordId)

    return {message:"record deleted"}
}

export const updateRecord = async(userId:string,recordId:string) => {
    
    const recordFind = await record.findById(recordId)

    if(!recordFind){
        throw new Error("no records found")
    }

    if(recordFind.userId?.toString() !== userId) {
        throw new Error("unauthorized")
    }

    await record.findByIdAndUpdate(recordId)

    return {message:"record updated"}
}