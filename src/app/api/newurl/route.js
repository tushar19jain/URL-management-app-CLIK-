import { urlModel } from "@/model/url";
import {NextResponse } from "next/server";

const { default: dbConnect } = require("@/helper/dbConnect");

dbConnect()
export async function POST(request){
    const {urlTitle,urlDescription,url,user} = await request.json();
    const URL = new urlModel({
        urlTitle,
        urlDescription,
        url,
        user
    });
    try {
        const savedUrl = URL.save()
        return NextResponse.json({
            message:"Sucess"
        },{
            status:201
        })
    } catch (error) {
        console.log(error)
    }
}