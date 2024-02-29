import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { User } from "@/model/user";
export async function GET(request){
    const logintoken = request.cookies.get("logintoken")?.value;
    const data = jwt.verify(logintoken,process.env.JWT_KEY) 
    const user = await User.findById(data._id).select("-password ")
    return NextResponse.json(user._id)
}