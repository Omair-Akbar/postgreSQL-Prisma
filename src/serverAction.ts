"use server"
import { PrismaClient } from "@prisma/client";




export const addUser = async (name:string,age:string,gender:string)=> {
    const prisma = new PrismaClient();
    console.log(name,age,gender)

}