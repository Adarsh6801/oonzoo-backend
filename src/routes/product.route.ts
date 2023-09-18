import express from "express"
import * as ProductController from "../controller/product/product.controller"
const router =express.Router();

router.get('/get-product',ProductController.getProduct)


export default router;