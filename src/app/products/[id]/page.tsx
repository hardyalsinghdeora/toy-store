import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

interface ProductPageProps {
  params: {
    id: string;
  };
}

interface RelatedProduct {
  id: string;
  name: string;
  images: string;
  brand: string;
  price: number;
}

async function getProduct(id: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
    
    if (!product) {
      return null;
    }
    
    return product;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return null;
  }
}

async function getRelatedProducts(categoryId: string, currentProductId: string) {
  try {
    return await prisma.product.findMany({
      where: {
        categoryId,
        id: {
          not: currentProductId,
        },
      },
      take: 4,
    });
  } catch (error) {
    console.error("Failed to fetch related products:", error);
    return [];
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id);
  
  if (!product) {
    notFound();
  }
  
  const relatedProducts = await getRelatedProducts(product.categoryId, product.id);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <nav className="mb-6">
        <ol className="flex text-sm">
          <li className="flex items-center">
            <Link href="/" className="text-gray-500 hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          <li className="flex items-center">
            <Link href="/products" className="text-gray-500 hover:text-blue-600">
              Products
            </Link>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          <li className="flex items-center">
            <Link 
              href={`/products?category=${product.categoryId}`} 
              className="text-gray-500 hover:text-blue-600"
            >
              {product.category.name}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          <li className="text-gray-900">{product.name}</li>
        </ol>
      </nav>

      {/* Product Details */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.images || "/images/placeholder.jpg"}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Information */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-1 text-lg text-gray-500">{product.brand}</p>
          
          {product.ageRange && (
            <div className="mt-4">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                Ages: {product.ageRange}
              </span>
            </div>
          )}
          
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</h2>
            <p className="mt-1 text-sm text-gray-500">
              {product.stock > 10 
                ? "In Stock" 
                : product.stock > 0 
                  ? `Only ${product.stock} left in stock - order soon` 
                  : "Out of Stock"}
            </p>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">Description</h3>
            <p className="mt-2 whitespace-pre-line text-gray-600">{product.description}</p>
          </div>
          
          <div className="mt-8 flex gap-4">
            <button 
              className="flex-1 rounded-full bg-blue-600 px-6 py-3 text-center text-white shadow-sm transition-colors hover:bg-blue-700 disabled:bg-gray-300"
              disabled={product.stock === 0}
            >
              Add to Cart
            </button>
            <button className="rounded-full border border-gray-300 bg-white p-3 text-gray-500 hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">You may also like</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((relatedProduct: RelatedProduct) => (
              <Link 
                key={relatedProduct.id} 
                href={`/products/${relatedProduct.id}`}
                className="group rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={relatedProduct.images || "/images/placeholder.jpg"}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-sm font-medium text-gray-900">{relatedProduct.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{relatedProduct.brand}</p>
                <p className="mt-2 text-lg font-bold text-gray-900">${relatedProduct.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 