import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import crypto from 'crypto';

// Simple password hashing function (in production, use bcrypt or similar)
function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// POST /api/auth/register - Register a new user
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password } = body;
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      );
    }
    
    // Create the user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword(password),
        role: 'USER',
        // Create an empty cart for the user
        cart: {
          create: {}
        },
        // Create an empty wishlist for the user
        wishlist: {
          create: {}
        }
      },
    });
    
    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;
    
    return NextResponse.json(userWithoutPassword, { status: 201 });
  } catch (error) {
    console.error('Failed to register user:', error);
    return NextResponse.json(
      { error: 'Failed to register user' },
      { status: 500 }
    );
  }
} 