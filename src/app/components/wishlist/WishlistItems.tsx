import Image from 'next/image'
import Link from 'next/link'
// import { formatCurrency } from '@/lib/utils'

interface WishlistItem {
  id: string;
  wishlistId: string;
  productId: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  images: string;
  category: {
    name: string;
  };
}

interface WishlistItemsProps {
  items: (WishlistItem & {
    product: Product;
  })[];
}

export default function WishlistItems({ items }: WishlistItemsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="relative h-48">
            <Image
              src={item.product.images.split(',')[0]}
              alt={item.product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <Link
              href={`/products/${item.product.id}`}
              className="text-lg font-semibold hover:text-indigo-600"
            >
              {item.product.name}
            </Link>
            <p className="text-gray-600 text-sm mb-2">
              {item.product.category.name}
            </p>
            <p className="text-xl font-bold mb-4">
              ${item.product.price.toFixed(2)}
            </p>
            <div className="flex justify-between items-center">
              <button
                className="btn-primary"
                onClick={() => {
                  // TODO: Add to cart functionality
                }}
              >
                Add to Cart
              </button>
              <button
                className="text-red-600 hover:text-red-800"
                onClick={() => {
                  // TODO: Remove from wishlist functionality
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 