import { NextRequest, NextResponse } from "next/server";
import { verify } from "./lib/jwt";

export function middleware(request: NextRequest) {
    console.log('Request is here hehehe');
    const token = request.headers.get('Authorization')?.split(' ')[1];

    if (!token) {
        return NextResponse.json({ error: "Unauthorized: No token provided" }, { status: 401 });
    }

    try {
        verify(token);

        return NextResponse.next();
    } catch (error) {
        return NextResponse.json({ error: "Unauthorized: Invalid token" }, { status: 401 });
    }
}

export const config = {
    matcher: '/api/create', // Apply middleware to all paths
};
