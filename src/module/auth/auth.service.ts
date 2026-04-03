import bcrypt from "bcrypt";
import usermodel from "../../models/usermodel";
import jwt from 'jsonwebtoken'


interface RegisterInput {
    name: string,
    email:string,
    password:string
}

interface LoginInput {
    password:string,
    email:string
}


export const userRegister = async (data: RegisterInput) => {
  try {
    if (!data.name || !data.email || !data.password) {

      throw new Error("Missing required fields");
    }
    
    const Existing = await usermodel.find({
        email:data.email.toLowerCase()
    })

    if(Existing){
        throw new Error("user already exist")
    }
    const hashedPass = await bcrypt.hash(data.password, 10);

    const newUser = await usermodel.create({
      name: data.name,
      email: data.email.toLowerCase(),
      password: hashedPass,
    });

    return newUser;
  } catch (err:any) {
    throw new Error(err.message || "user registratrion failed");
  }
};


export const loginUser = async(data:LoginInput) =>{
    try{
        if(!data.email || !data.password){
            throw new Error("Missing required fields")
        }

        const user = await usermodel.findOne({
            email:data.email.toLowerCase()
        })

        if(!user){
            throw new Error("user doesnt exist with this emailId")
        }

        const isMatch = await bcrypt.compare(data.password,user.password)

        if(!isMatch){
            throw new Error("password is not correct")
        }

        const token = jwt.sign({
            id:user._id,
            role:user.role
        },process.env.JWT_SECRET!,
        {expiresIn:"1d"}
    )

    const safeReturn = {
        _id:user._id,
        name:user.name,
        email:user.email,
        role:user.role
    }

    return {
        token,
        safeReturn
    }
    }catch(err:any){
        throw new Error(err.message || "login failed")
    }
}
