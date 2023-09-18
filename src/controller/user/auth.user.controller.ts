import { RequestHandler } from "express";


// user register with
//firstName, lastName, email, password
export const register:RequestHandler=async(req,res)=>{
    try{
        const {firstName,lastName,email,password}=req.body;
        
    }catch(error){
        
    }
}