"use server"
import { PrismaClient } from "@prisma/client";




export const addUser = async (name:string,age:string,gender:string)=> {
    const prisma = new PrismaClient();
    console.log(name,age,gender)

    try {
        const newUser = await prisma.user.create({
             data: {
               name,
               age,
               gender
             },
          });
     
     } catch (error) {
         console.log(error)
     }  



}