import jwt from "jsonwebtoken"
import { JwtPayload } from "jsonwebtoken";
import { RequestHandler } from "express";
import { UserModel } from "../model/user.model"

export const userValidate: RequestHandler = async (req, res, next) => {
    try {
        const token: string | undefined = req.headers?.authorization?.split(' ')[1];
        if (token) {
            try {
                console.log(token,'token');
                
                const result = jwt.verify(token, process.env.JWT_SECREAT_KEY!) as JwtPayload;
                console.log(result,'result');
                
                const user = await UserModel.findOne({ _id: result.details.userId });
                console.log(user,'user');
                
                if (user) {
                    next();
                } else {
                    res.status(401).send({ authorization: false });
                }
            } catch (error) {
                res.status(401).send({ authorization: false });
            }
        } else {
            res.status(401).send({ authorization: false });
        }
    } catch (error) {
        res.status(500);
    }
}