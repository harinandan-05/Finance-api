import { connect } from 'mongoose'

const connectDb = async function connection() {
    try {
        const url = process.env.MONGO_URI as string;
        await connect(url)
        console.log("mongodb connected successfully")
    } catch (err) {
        console.log("database connection error", err)
    }
}

export default connectDb;