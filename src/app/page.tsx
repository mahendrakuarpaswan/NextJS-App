
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

// const getData = async()=>{
//   const res = await fetch("http://localhost:3000/api/posts",{

//     method:'GET',
//     headers:{
//            'Content-Type':'application/json'
//     }
     
//   });

//  const data = res.json();

//  return data;
  
// }

export default  async  function  GetData1(){

            // let allData = await getData();
            // console.log(allData)

            const data =  await prisma.user.findMany();

            console.log("Response this  pgAdmin Dataabase===",data);

             return (
                       <main className="flex main-h-screen flex-col items-center justify-between p-24">

                        {/* {
                           allData.map((curEle:any,index:number)=>(

                                          <div key={index}>
                                              
                                                   <h2 className="text-red-500">{curEle.title}</h2>
                                                     
                                                    <p>{curEle.body}</p>

                                                    <hr/>

                                          </div>

                           )) 
                        }
                             */}

                              
                         <div>
                                 <h2>Hello This is Home Page!!!!</h2>
                              
                         </div>



                       </main>
             )
}


// export const getServerSideProps = async() =>{

//       const data =  await prisma.user.findMany()

//        return {

//             props:{"data":data}
//        }


// }