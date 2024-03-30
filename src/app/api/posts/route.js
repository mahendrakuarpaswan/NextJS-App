import {NextResponse} from "next/server";

import connectDB from "../../lib/connectDB";

import Post from "../../models/Post";

export async function GET(req){

       await connectDB();

       const result = await Post.find();

       try{

           return NextResponse.json({"result":result},{status:200})

       }catch(error){

        return NextResponse.json({"msg":"Connect UnSuccessfully"},{status:400})

       }
}