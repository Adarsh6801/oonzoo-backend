import { RequestHandler } from "express";
import { UserModel } from "../../model/user.model";
import bcrypt from "bcrypt"
import { generateToken } from "../../config/jwt.config";



/// ====================================Register=========================================== 
//firstName, lastName, email, password
export const register: RequestHandler = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        console.log(req.body, 'dfasdfas');

        // checking the email is already exist or not
        const user = await UserModel.findOne({ email: email })
        if (user) {
            //send message user is exist
            return res.status(200).send({ status: false, message: "Email is already taken" })
        } else {
            // creating hashed password 
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            new UserModel({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hashedPassword,
            })
                .save()
                .then((user) => {
                    // creating a jwt token using userId
                    const jwtToken = generateToken({ userId: user.id })
                    res.status(200).send({ status: true, jwtToken, message: "User registered successfully" })
                })
        }
    } catch (error) {
        res.status(500);
    }
}

// ====================================login=========================================== 
//email password
export const login: RequestHandler = async (req, res) => {
    try {
        const { email, password } = req.body;
        // check the email is true
        const user = await UserModel.findOne({ email: email })
        if (user) {
            // compare the passwords
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid) {
                const jwtToken = generateToken({ userId: user.id })
                res.status(200).send({ status: true, jwtToken, message: "User login success" });
            }
            else {
                //password is not valid
                res.status(200).send({ status: false, message: "incorrect password" });
            }
        }else{
             //if email is not found
      res
      .status(200)
      .send({ status: false, message: "no user found with this email" });
  }
        
    } catch (error) {
        res.status(500);

    }
}