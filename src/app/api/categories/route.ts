import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/categories - Retrieve all categories
export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      include: {
        subCategories: true,
      },
    });
    
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}

// POST /api/categories - Create a new category
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    const data: any = {
      name: body.name,
      description: body.description,
      image: body.image,
    };
    
    // If this is a subcategory, connect it to its parent
    if (body.parentId) {
      data.parent = {
        connect: {
          id: body.parentId,
        },
      };
    }
    
    const category = await prisma.category.create({
      data,
    });
    
    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error('Failed to create category:', error);
    return NextResponse.json(
      { error: 'Failed to create category' },
      { status: 500 }
    );
  }
}