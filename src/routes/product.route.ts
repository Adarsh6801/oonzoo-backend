import express from "express"
import * as ProductController from "../controller/product/product.controller"
import { userValidate } from "../middleware/validate.middleware";
const router =express.Router();

router.get('/get-product',userValidate,ProductController.getProduct)


export default router;