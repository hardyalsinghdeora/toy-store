import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

// Mock data for featured products until we fetch from the API
const featuredProducts = [
  {
    id: "1",
    name: "Wooden Building Blocks",
    price: 29.99,
    image: "/images/toys/wooden-blocks.jpg",
    brand: "EcoToys",
    ageRange: "3-10",
  },
  {
    id: "2",
    name: "Interactive Learning Robot",
    price: 49.99,
    image: "/images/toys/robot.jpg",
    brand: "TechKids",
    ageRange: "6-12",
  },
  {
    id: "3",
    name: "Plush Teddy Bear",
    price: 19.99,
    image: "/images/toys/teddy.jpg",
    brand: "Cuddlies",
    ageRange: "0+",
  },
  {
    id: "4",
    name: "Board Game Collection",
    price: 34.99,
    image: "/images/toys/board-game.jpg",
    brand: "FamilyFun",
    ageRange: "8+",
  },
];

// Mock data for categories
const categories = [
  { id: "1", name: "Action Figures", image: "/images/categories/action-figures.jpg" },
  { id: "2", name: "Dolls", image: "/images/categories/dolls.jpg" },
  { id: "3", name: "Educational", image: "/images/categories/educational.jpg" },
  { id: "4", name: "Board Games", image: "/images/categories/board-games.jpg" },
  { id: "5", name: "Outdoor Toys", image: "/images/categories/outdoor.jpg" },
  { id: "6", name: "Plush Toys", image: "/images/categories/plush.jpg" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Fun, Safe and</span>
                <span className="block text-blue-600">Educational Toys</span>
              </h1>
              <p className="mt-6 max-w-md text-lg text-gray-600">
                Discover our selection of high-quality toys that spark creativity,
                encourage learning, and bring joy to children of all ages.
              </p>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/products"
                  className="rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700"
                >
                  Shop Now
                </Link>
                <Link
                  href="/categories"
                  className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                >
                  Browse Categories
                </Link>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-96">
              <Image
                src="/images/hero.jpg"
                alt="Children playing with toys"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Featured Products
            </h2>
            <p className="mt-4 text-gray-600">
              Our most popular toys loved by kids and parents alike
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-block rounded-full border border-blue-600 px-6 py-3 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Shop by Category
            </h2>
            <p className="mt-4 text-gray-600">
              Explore our wide range of toy categories
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="group overflow-hidden rounded-lg bg-white shadow transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-square">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="font-medium text-gray-900">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-blue-600 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Join Our Toy Club for Exclusive Offers
            </h2>
            <p className="mt-2 text-blue-100">
              Sign up for our newsletter and get 10% off your first order
            </p>
            <form className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-white px-6 py-2 text-sm font-medium text-blue-600 shadow-sm transition-colors hover:bg-blue-50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center rounded-lg p-6 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mb-4 h-12 w-12 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>

              <h3 className="text-lg font-semibold text-gray-900">Free Shipping</h3>
              <p className="mt-2 text-sm text-gray-600">On orders over $50</p>
            </div>
            <div className="flex flex-col items-center rounded-lg p-6 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mb-4 h-12 w-12 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                />
              </svg>

              <h3 className="text-lg font-semibold text-gray-900">Quality Guarantee</h3>
              <p className="mt-2 text-sm text-gray-600">Tested for safety</p>
            </div>
            <div className="flex flex-col items-center rounded-lg p-6 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mb-4 h-12 w-12 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9.75h4.875a2.625 2.625 0 0 1 0 5.25H12M8.25 9.75 10.5 7.5M8.25 9.75 10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185Z"
                />
              </svg>

              <h3 className="text-lg font-semibold text-gray-900">Easy Returns</h3>
              <p className="mt-2 text-sm text-gray-600">30-day return policy</p>
            </div>
            <div className="flex flex-col items-center rounded-lg p-6 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mb-4 h-12 w-12 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <h3 className="text-lg font-semibold text-gray-900">Customer Support</h3>
              <p className="mt-2 text-sm text-gray-600">24/7 dedicated support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
