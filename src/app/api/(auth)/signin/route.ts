import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/db";
import User from "@/models/User";
import { sign } from '@/lib/jwt';
import bcrypt from 'bcrypt';
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
    const { email, password } = await request.json();
    
    try {
        await connect(); // Ensure connection is awaited
        
        const userInfo = await User.findOne({ email });
        if (!userInfo) {
            return NextResponse.json({ error: "User does not exist" }, { status: 404 });
        }
        
    
        const isMatch = await bcrypt.compare(password, userInfo.password);
        if (!isMatch) {
            return NextResponse.json({ error: "Invalid password" }, { status: 401 });
        }
        

        const token = sign({ id: userInfo._id.toString(), email: userInfo.email });
        

        const { password: _, ...userWithoutPassword } = userInfo.toObject();

        cookies().set('token', token);
        return NextResponse.json({ message: "Signin successful", user: userWithoutPassword }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
