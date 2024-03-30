import {NextResponse} from "next/server";
export   async function GET(req){
        //  console.log("req===",req)

        const requestHeaders = new Headers(req.headers);

        // URL Query Params

        const {searchParams} = new URL(req.url);

        console.log(searchParams);

      return NextResponse.json({"msge":"Hello API  Page "})
}

export async function POST(req){
       
    //    const res = await req.json();    
    //    console.log("ResJSON",res);

    //   const formData = await req.formData();

    //   console.log("formData====",formData);
     
       return NextResponse.json({"msg":"Post Success",},{status:201});

           
}