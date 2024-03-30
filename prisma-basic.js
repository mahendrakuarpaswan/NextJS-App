const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const create=async(name,username,password)=>{
    const user = await prisma.user.create({data:{name,username,password}})
    if(user){
        console.log(user)
    }
    else{
        console.log("unable to create the user")
    }

}

const getAll = async ()=>{
    const user =await  prisma.user.findMany()
    if(user){
        console.log(user)
    }
    else{
        console.log("unable to create the user")
    } 
}

// create("Mahendra","mahi","Mahi@22")
getAll()