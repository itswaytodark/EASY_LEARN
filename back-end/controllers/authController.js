import userModel from "../Models/userModels.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { JWT_SECRET, NODE_ENV } from "../config/envConfig.js"


export const register = async (req, res) => {

    const { name, email, password } = req.body

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: 'Missing Details' })
    }

    try {
        const existingUser = await userModel.findOne({ email })

        if (existingUser) {
            return res.status(409).json({ success: false, message: 'User Already Exist' })
        }

        const hashPassword = await bcrypt.hash(password,10)

        const dbUser = new userModel({name, email, password:hashPassword})
        await dbUser.save()

        const token = jwt.sign({id: dbUser._id} , JWT_SECRET, {expiresIn:'7d'})

        res.cookie('token', token , {
            httpOnly: true,
            secure: NODE_ENV === 'production' ,
            sameSite: 'none',
            maxAge: 7 * 24 * 60 * 60 * 1000

        })

        return res.status(201).json({success:true , message: 'User Created'})
    }
    catch (error) {
        return res.status(500).json({ success: false, message: error.message })
    }

}

export const login = async(req,res) => {
    
    const {email , password} = req.body

    if(!email || !password)
    {
        return res.status(400).json({ success: false,
        message: 'Email and Password are required' })
    }

    try{
        const user = await userModel.findOne({email})

        if(!user){
        return res.status(400).json({ success: false, message: 'Invalid Email' })
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
        return res.status(400).json({ success: false, message: 'Invalid Password' })
        }

        const token = jwt.sign({id: user._id} , JWT_SECRET, {expiresIn:'7d'})

        res.cookie('token', token , {
            httpOnly: true,
            secure: NODE_ENV === 'production' ,
            sameSite: 'none',
            maxAge: 7 * 24 * 60 * 60 * 1000

        })

        return res.status(201).json({success:true , message: 'Login Successfull'})


    }
    catch(error){
        return res.status(500).json({ success: false, message: error.message })
    }
}

export const logout = async(req,res) => {
    try{
        res.clearCookie('token' , {
            httpOnly: true,
            secure: NODE_ENV === 'production' ,
            sameSite: 'none',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(201).json({success:true , message: 'Logged Out'})
    }
    catch{
        return res.status(500).json({ success: false, message: error.message })
    }
}