import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    console.log('Session:', session);

    if (!session) {
      console.log('No session found');
      return new NextResponse('Unauthorized - No session', { status: 401 });
    }

    if (session.user.role !== 'ADMIN') {
      console.log('User is not admin:', session.user);
      return new NextResponse('Unauthorized - Not admin', { status: 401 });
    }

    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    console.log('Found users:', users);
    return NextResponse.json(users);
  } catch (error) {
    console.error('Error in users API route:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 