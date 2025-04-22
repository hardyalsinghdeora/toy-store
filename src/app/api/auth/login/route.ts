import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import crypto from 'crypto';

// Simple password hashing function (in production, use bcrypt or similar)
function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// POST /api/auth/login - Login a user
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;
    
    // Find the user
    const user = await prisma.user.findUnique({
      where: { email },
    });
    
    // Check if user exists and password is correct
    if (!user || user.password !== hashPassword(password)) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }
    
    // Create a simple session token
    // In production, use a proper authentication system like JWT or NextAuth.js
    const sessionToken = crypto.randomBytes(32).toString('hex');
    
    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;
    
    // Return the user data and set a cookie in the response
    const response = NextResponse.json(userWithoutPassword);
    response.cookies.set('session_token', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });
    
    return response;
  } catch (error) {
    console.error('Failed to login:', error);
    return NextResponse.json(
      { error: 'Failed to login' },
      { status: 500 }
    );
  }
} 