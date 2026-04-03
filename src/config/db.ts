import {connect} from 'mongoose'

const connectDb = async function connection(){
    try{
        const url = "mongodb+srv://testuserharin:hari2005@cluster0.llwnf.mongodb.net/backend-api"
        await connect(url)
        console.log("mongodb connected successfully")
    }catch(err){
        console.log("database connection error",err)
    }
}

export default connectDb;