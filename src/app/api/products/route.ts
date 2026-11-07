import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// GET /api/products - Retrieve all products
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get('categoryId');
    const featured = searchParams.get('featured') === 'true';
    
    const where: any = {};
    
    if (categoryId) {
      where.categoryId = categoryId;
    }
    
    if (featured) {
      where.featured = true;
    }
    
    const products = await prisma.product.findMany({
      where,
      include: {
        category: true,
      },
    });
    
    return NextResponse.json(products);
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// POST /api/products - Create a new product
export async function POST(req: NextRequest) {
  const denied = await requireAdmin();
  if (denied) return denied;

  try {
    const body = await req.json();
    
    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        price: body.price,
        stock: body.stock,
        images: body.images,
        ageRange: body.ageRange,
        brand: body.brand,
        featured: body.featured || false,
        category: {
          connect: {
            id: body.categoryId,
          },
        },
      },
    });
    
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Failed to create product:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
} 