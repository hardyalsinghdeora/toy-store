import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

async function getCategories() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        name: 'asc'
      }
    });
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Browse Categories</h1>
      
      <div className="max-w-6xl mx-auto">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={`/products?category=${category.id}`}
              className="block group"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-48 w-full">
                  <Image
                    src={category.image || '/images/placeholder.svg'}
                    alt={category.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                    {category.name}
                  </h2>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                  <div className="mt-4 flex justify-end">
                    <span className="text-blue-600 group-hover:text-blue-700">
                      View Products →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {categories.length === 0 && (
          <div className="text-center py-12">
            <div className="mb-4">
              <Image
                src="/images/no-results.svg"
                alt="No categories found"
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">No Categories Found</h2>
            <p className="text-gray-600">
              Please check back later for our product categories.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-600 mb-6">
            Our team is here to help you find the perfect toys for your needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
} 