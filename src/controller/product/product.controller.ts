import { RequestHandler } from "express";
import { ProductModel } from "../../model/product.model";


export const getProduct: RequestHandler= async (req,res)=>{
    const page= Number(req.query.page) || 1;
    const limit= Number(req.query.perPage) || 5;
    const skip=(page-1) * limit;
    try{
        const product= await  ProductModel.find().skip(skip).limit(limit)
        res.status(200).send({product,message:"product sent succesfully"})
    }catch(error){
        res.status(500)
    }
}