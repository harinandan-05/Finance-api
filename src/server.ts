import dotenv from 'dotenv'
dotenv.config()
import app from "./app";
import connectDb from "./config/db";


const port = 3000;

async function server(){
    app.listen(port,() => {console.log(`server up on: ${port}`)})
}

async function db() {
    await connectDb()
}

db();
server();
