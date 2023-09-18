import express from "express"
import * as AuthController from "../controller/user/auth.user.controller"
const router =express.Router();

router.post("/auth/register",AuthController.register);
router.post("/auth/login",AuthController.login);


export default router;