import dbConnect from "@/helper/dbConnect";
import { User } from "@/model/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
dbConnect();
export async function POST(request){
    const {name,email,password} = await request.json();
    const user = new User({
        name,
        email,
        password
    });
    try {
        user.password= await bcrypt.hash(user.password,parseInt(process.env.BCRYPT_SALT));
        console.log(user);
        const createdUser = await user.save();
         return NextResponse.json(
            {
                message:"Wishlisted !",
                status:201
            });
    } catch (error) {
        console.log(error)
       return  NextResponse.json({
            message:"Failed to create user",
            status:false,
        })
    }

}