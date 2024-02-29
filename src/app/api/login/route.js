import dbConnect from "@/helper/dbConnect";
import { User } from "@/model/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import  jwt  from "jsonwebtoken";
dbConnect();
export async function POST(request){
    const {email,password} = await request.json();
    try {
        const user = await User.findOne({
        email:email
        })
        if(user == null){
           throw new Error("User not found!")
        }
        const matched = bcrypt.compareSync(password,user.password)
        if(!matched){
            throw new Error("Password not matched!")
        }
        //3. Generate token
        const token = jwt.sign({
            _id:user._id,
            name:user.name
        },process.env.JWT_KEY)
        console.log("token:" + token)

        //4. save token to cookie
        const response = NextResponse.json({
             message:"Login success",
             success:true
        });
        response.cookies.set("logintoken",token,{
            expiresIn:"1d",
            httpOnly:false
        });
        return response
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"server error",
            success:false
        })
    }
}