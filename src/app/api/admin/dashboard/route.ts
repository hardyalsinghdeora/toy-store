import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== 'ADMIN') {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Fetch total counts
    const [
      totalUsers,
      totalProducts,
      totalOrders,
      totalRevenue,
      recentOrders,
      topProducts
    ] = await Promise.all([
      prisma.user.count(),
      prisma.product.count(),
      prisma.order.count(),
      prisma.order.aggregate({
        _sum: {
          total: true
        }
      }),
      prisma.order.findMany({
        take: 5,
        orderBy: {
          createdAt: 'desc'
        },
        include: {
          user: {
            select: {
              name: true,
              email: true
            }
          }
        }
      }),
      prisma.product.findMany({
        take: 5,
        orderBy: {
          orderItems: {
            _count: 'desc'
          }
        },
        include: {
          _count: {
            select: {
              orderItems: true
            }
          }
        }
      })
    ]);

    return NextResponse.json({
      stats: {
        totalUsers,
        totalProducts,
        totalOrders,
        totalRevenue: totalRevenue._sum.total || 0
      },
      recentOrders,
      topProducts
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
} 