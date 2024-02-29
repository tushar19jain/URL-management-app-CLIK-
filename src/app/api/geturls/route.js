import { urlModel } from "@/model/url";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"
const { default: dbConnect } = require("@/helper/dbConnect");

dbConnect()
export async function GET(request){
    const userToken = request.cookies.get("logintoken")?.value;
    const token = jwt.verify(userToken,process.env.JWT_KEY)
    const data = await urlModel.find({
        user:(token._id)
    })
    return NextResponse.json(data);
}