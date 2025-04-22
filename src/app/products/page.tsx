import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ProductCard from "@/components/ProductCard";

// Define interfaces for our data types
interface Category {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  images: string;
  ageRange: string | null;
  brand: string;
  featured: boolean;
  categoryId: string;
}

async function getCategories() {
  try {
    return await prisma.category.findMany();
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
}

async function getProducts(categoryId?: string) {
  const where = categoryId ? { categoryId } : {};
  
  try {
    return await prisma.product.findMany({
      where,
      orderBy: {
        name: 'asc',
      },
    });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const categoryId = 
    typeof searchParams.category === 'string' ? searchParams.category : undefined;
  
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(categoryId),
  ]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">Products</h1>
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">Categories</h2>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/products" 
                  className={`block text-sm ${!categoryId ? 'font-medium text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                >
                  All Products
                </Link>
              </li>
              {categories.map((category: Category) => (
                <li key={category.id}>
                  <Link 
                    href={`/products?category=${category.id}`} 
                    className={`block text-sm ${categoryId === category.id ? 'font-medium text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="lg:col-span-3">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product: Product) => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.images}
                  brand={product.brand}
                  ageRange={product.ageRange || undefined}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-12 text-center">
              <Image 
                src="/images/no-results.svg" 
                alt="No products found" 
                width={150} 
                height={150}
                className="mb-4"
              />
              <h3 className="text-lg font-medium text-gray-900">No products found</h3>
              <p className="mt-1 text-gray-500">
                We couldn't find any products matching your criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 