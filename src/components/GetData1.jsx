const getData = async()=>{

      const res = await fetch("http://localhost:3000/api/posts",{
   
        method:'GET',
        headers:{
               'Content-Type':'application/json'
        }
         
      });

     const data = res.json();

     return data;
      
}

export default  async  function  GetData1(){

                const allData = await getData();

                 return (
                           <main className="flex main-h-screen flex-col items-center justify-between p-24">

                            {
                               allData.map((curEle,index)=>(

                                              <div key={index}>
                                                  
                                                       <h className="text-red-500">{curEle.title}</h>
                                                         
                                                        <p>{curEle.body}</p>

                                                        <hr/>

                                              </div>

                               )) 
                            }
                                
                           </main>
                 )
}