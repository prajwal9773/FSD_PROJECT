import {User} from "../models/user_model.js";
import bcryptjs from "bcryptjs";
import crypto from "crypto";
import {generateTokenAndSetCookie} from "../utils/generateTokenAndSetCookie.js"
import { sendVerificationEmail } from "../Mail/emails.js";
import {sendWelcomeEmail, sendResetPasswordMail, sendResetSuccessMail} from "../Mail/emails.js"
export const signup = async(req,res)=>{
    const {email, password, name} = req.body;
   try{
     if(!email || !password || !name){
        throw new Error("All fields are required");
     }
     const userPresent = await User.findOne({email});
     if(userPresent){
        throw new Error("Email already exists, so user is present");

     }
     const hashedPassword = await bcryptjs.hash(password, 10);
     const verificationToken = Math.floor(100000 + Math.random()*90000).toString();
     const user = new User({
        email,
        password: hashedPassword,
        name,
        verificationToken,
        verificationExpires: Date.now() + 24*60*60*1000
     });

     await user.save();


     generateTokenAndSetCookie(res,user._id);

    await sendVerificationEmail(user.email,verificationToken);



     res.status(201).json({
      message: "User created successfully",
      user:{
         ...user._doc,
         password: undefined,
      }
     })



   } catch(error){
    return res.status(400).json({message:error.message});

   }
   
};

export const verifyEmail = async(req,res)=>{
   const {code} = req.body;
   try{
      const user = await User.findOne({
         verificationToken: code,
         verificationExpires:{$gt:Date.now()}
      })

      if(!user){
         return res.status(400).json({success:"false", message:"Invalid verification token"});
      }

      user.isVerified = true;
      user.verificationToken = undefined;
      user.verificationExpires = undefined;
      await user.save();

      await sendWelcomeEmail(user.email, user.name);
      res.status(200).json({
         message: "Email verified successfully",
         success:true,
         user:{
            ...user._doc,
            password: undefined,

         }
      })

   }

   catch{
      return res.status(400).json({success:"false", message:"Invalid verification token"});
      
   }
}

export const login = async(req,res)=>{
   const {email,password} = req.body;
   try{
      const user = await User.findOne({email});
      if(!user){
         return res.status(400).json({success:"false", message:"Invalid email or password"});
      }
      const isValidPassword = await bcryptjs.compare(password,user.password);
      if(!isValidPassword){
         return res.status(400).json({success:"false", message:"Invalid email or password"});

      }

      generateTokenAndSetCookie(res,user._id);

      user.lastlogin = new Date();
      await user.save();


      res.status(200).json({
         success:true,
         user:{
            ...user._doc,
            password: undefined,
         }
      });


      
     

   }

   catch(error){
      console.log(error);
      return res.status(400).json({success:"false", message:"Invalid email or password"});
   }
    
}
export const logout = async(req,res)=>{
    res.clearCookie("token");
    res.status(200).json({
      success:true,
      message:"Logged out successfully"
    });

};


export const forgotPassword = async(req,res)=>{
   const {email} = req.body;
   try{
      const user = await User.findOne({email});
      if(!user){
         return res.status(400).json({success:"false", message:"User not found"});
      }
      const resetToken = crypto.randomBytes(20).toString("hex");
      const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000 // 1 hr reset link time

      user.resetPasswordToken = resetToken;
      user.resetPasswordExpires = resetTokenExpiresAt;
       
      await user.save();

      await sendResetPasswordMail(user.email, `${process.env.CLIENT_URL}/reset-password/${resetToken}`);
      res.status(200).json({
         success: true,
         message: "Password reset link sent to your email",
      });

   }

   catch(error){
      console.log(error);
      return res.status(400).json({success:"false", message:"Invalid email"});
   }
}

export const resetPassword = async(req,res)=>{

   try{
   const {Token} = req.params;
   const {password} = req.body;
   const user = await User.findOne({
      resetPasswordToken:Token, 
      resetPasswordExpires:{$gt:Date.now()
      }});

      if(!user){
         return res.status(400).json({success:"false", message:"Invalid token"});
      }
      const hashedPassword = await bcryptjs.hash(password, 10);
      user.password = hashedPassword;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;
      await user.save();

     await sendResetSuccessMail(user.email);
     return res.status(200).json({success:"true", message:"Password reset successfully"});

   }

   catch(error){
      console.log(error);
      return res.status(400).json({success:"false", message:"Invalid token"});

   }

}

export const checkAuth = async(req,res)=>{
   try{
      const user = await User.findById(req.userId);
      if(!user){
         return res.status(400).json({success:"false", message:"User not found"});

      }

      res.status(200).json({
         success:"true",
         message:"User found",
         user:{
            ...user._doc,
            password:undefined,
         }
      })
   }

   catch(error){
      console.log(error);

      
   }
}