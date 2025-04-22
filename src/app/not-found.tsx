import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="relative h-40 w-40 mb-8">
        <Image
          src="/logo.svg"
          alt="ToyShop Logo"
          fill
          className="object-contain"
        />
      </div>
      <h1 className="text-4xl font-bold text-gray-900">404 - Page Not Found</h1>
      <p className="mt-4 max-w-md text-lg text-gray-600">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
        >
          Go Back Home
        </Link>
        <Link
          href="/products"
          className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
} 