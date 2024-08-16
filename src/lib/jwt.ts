import jwt from 'jsonwebtoken';

export const sign=(user: any)=>{
    console.log(user)
    return jwt.sign(user,process.env.JWT_SECRET,{expiresIn: '1h'});
}

export const verify=(token:string)=>{
    return jwt.verify(token,process.env.JWT_SECRET);
}