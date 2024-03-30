
import { NextResponse } from "next/server";

// export const GET = async (req,context) =>{
       
//               console.log("context",context);

//              return NextResponse.json({"msg":"GET API ID"},{status:201});
// }


export const GET = async () =>{

          const res = fetch("https://jsonplaceholder.typicode.com/post",{

              headers:{
                'Content-Type':'application/json'
              }
          })

          const post = await res.json();

          return NextResponse.json({"data":post})


}