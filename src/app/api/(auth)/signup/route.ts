import { NextRequest , NextResponse } from "next/server";
import { connect } from "@/lib/db";
import User from "@/models/User";
import bcrypt from 'bcrypt';

export async function POST(req:NextRequest){
    const {email,password}=await req.json();
    try {
        connect();
        const exists=await User.findOne({email});
        if(exists){
            return NextResponse.json({error: "User already exits"},{status:400});
        }
        console.log(password);
        const hashedPassword=await bcrypt.hash(password,12);
        const user=new User({email,password:hashedPassword});
        console.log(hashedPassword);
        user.save();
        return NextResponse.json({message: "User sign up successfully"});
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:500});   
    }
}   