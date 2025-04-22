"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  ageRange?: string;
}

export default function ProductCard({ id, name, price, image, brand, ageRange }: ProductCardProps) {
  return (
    <div className="group relative rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <Link href={`/products/${id}`} className="block h-full w-full">
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <Image
            src={image || "/placeholder-toy.jpg"}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-1 text-sm font-medium text-gray-900 line-clamp-1">{name}</h3>
          <p className="mb-1 text-xs text-gray-500">{brand}</p>
          {ageRange && (
            <p className="mb-2 inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800">
              Ages: {ageRange}
            </p>
          )}
          <p className="mt-2 text-lg font-bold text-gray-900">${price.toFixed(2)}</p>
        </div>
      </Link>
      <button
        className="absolute bottom-4 right-4 rounded-full bg-blue-600 p-2 text-white shadow-sm transition-colors hover:bg-blue-700"
        aria-label="Add to cart"
        onClick={(e) => {
          e.preventDefault();
          // TODO: Add to cart functionality
          console.log(`Add product ${id} to cart`);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </button>
    </div>
  );
} 