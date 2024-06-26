"use client"
import Image from "next/image";
// import { useRouter } from 'next/navigation'
// import { useState } from "react";

// export default function Sidebar() {

//   const router = useRouter();

//   const [sidebarcolor,setSidebarcolor] = useState(0);


//   const object = [
//     {
//      icon:"/images/icons8-home-34.png",
//      name:"Home",
//      route: "/dashboard"
//    },

//    {
//      icon:"/images/icons8-transactions-reciept-64.png",
//      name:"Invoices",
//      route: "/invoices"
//    },

//    {
//      icon:"/images/icons8-move-up-50.png",
//      name:"Customers", 
//      route: "/customers"
//    },
   
// ]

// const handleSideBarContent = (index) =>{
//   router.push(object[index].route);
//   setSidebarcolor(index);               
// }

//     return   <div>
    
//                    <div className="w-32 h-[40rem] bg-gray-100">

//                         <div className="flex bg-blue-600 w-32 h-24 rounded px-2 py-2 space-x-1">
//                                   <Image src="/images/icons8-dns-50.png" alt="earth"
//                                     width={50}
//                                     height={50}
//                                     className="w-4 h-4 bg-gray-50 mt-16"
//                                   /> 

//                                   <h2 className=" text-gray-50 py-16">Acme</h2>     
//                         </div>


//                        <div className="px-2 py-2">
//                           {/* <div className="flex space-x-2 mt-4">
//                                <Image src="/images/icons8-home-34.png" alt="home"
//                                width={50}
//                                height={50}
//                                className="w-4 h-5"
                               
//                                />
//                                 <h2>Home</h2>     
//                           </div>

//                           <div className="flex space-x-2 mt-4">
//                                <Image src="/images/icons8-transactions-reciept-64.png" alt="invoices"
                             
//                                width={50}
//                                height={50}
//                                className="w-4 h-4"

//                                />
//                                 <h2>Invoices</h2>     
//                           </div>

//                           <div className="flex space-x-2 mt-4">
//                                <Image src="/images/icons8-move-up-50.png" alt="customers"
//                                 width={50}
//                                 height={50}
//                                 className="w-4 h-5"

//                                />
//                                 <h2>Customers</h2>     
//                           </div> */}


//                             {object.map((curElem,index)=>{

//                                        return (

//                                                <div className={sidebarcolor == index?"w-32 h-8 bg-blue-100 rounded -ml-2 cursor-pointer":"w-32 h-8 -ml-2 cursor-pointer"} key={index} onClick={()=>handleSideBarContent(index)}>
//                                                     <div className="flex space-x-2 mt-2">
//                                                        <Image src={curElem.icon} alt={curElem.name}
//                                                         width={50}
//                                                          height={50}
//                                                           className="w-4 h-5 mt-2 ml-2"
//                                                      />
//                                                      <h2 className="mt-1">{curElem.name}</h2>     
//                           </div>     
                                                         
//                                                </div>
//                                        )

 
//                             })}
                          
//                        </div>



                     
//                    </div>

//                   <div className="flex space-x-3 bg-gray-100 rounded mt-2 w-32 h-8 px-1 py-1">

//                         <Image src="/images/icons8-move-up-50.png" alt="switchoff"
//                          width={50} height={50}
//                          className="w-5 h-5 mt-1"
//                          />
//                         <h2>Sign Out</h2>
//                   </div>


//              </div>
//   }




  import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
  } from '@heroicons/react/24/outline';
  import Link from 'next/link';
  import { usePathname } from 'next/navigation';
  import clsx from 'clsx';


  export default function NavLinks() {
   
    const pathname = usePathname();
     
    const links = [
      {
      //  icon:"/images/icons8-home-34.png",
      icon:UserGroupIcon,
       name:"Home",
      //  route: "/dashboard"
      href:"/dashboard"
     },
  
     {
      //  icon:"/images/icons8-transactions-reciept-64.png",
      icon:HomeIcon,
       name:"Invoices",
      //  route: "/invoices"
      href:"/dashboard/invoices"
     },
  
     {
      //  icon:"/images/icons8-move-up-50.png",
      icon:DocumentDuplicateIcon,
       name:"Customers", 
      //  route: "/customers"
      href:"/dashboard/customers"
     },
     
  ]

    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
          );
        })}
      </>
    );
  }