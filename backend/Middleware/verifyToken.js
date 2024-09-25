import jwt from "jsonwebtoken";

export const verifyToken = (req,res, next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({success:"false", message:"No token available"});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({success:"false", message:"Invalid token"});
        }
        req.userId = decoded.userId;
        next();

    }

    catch(error){
        return res.status(401).json({message:"Invalid token"});

    }
}