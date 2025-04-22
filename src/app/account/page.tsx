'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';

export default function AccountPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-3xl font-bold text-gray-900">My Account</h1>
          </div>
          <div className="border-t border-gray-200">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Link
                  href="/account/profile"
                  className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50"
                >
                  <h3 className="text-lg font-medium text-gray-900">Profile</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    View and edit your profile information
                  </p>
                </Link>

                <Link
                  href="/account/orders"
                  className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50"
                >
                  <h3 className="text-lg font-medium text-gray-900">Orders</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    View your order history and track shipments
                  </p>
                </Link>

                <Link
                  href="/account/addresses"
                  className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50"
                >
                  <h3 className="text-lg font-medium text-gray-900">Addresses</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Manage your shipping addresses
                  </p>
                </Link>

                {session?.user?.role === 'ADMIN' && (
                  <>
                    <Link
                      href="/admin/products"
                      className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50"
                    >
                      <h3 className="text-lg font-medium text-gray-900">
                        Manage Products
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Add, edit, and manage products
                      </p>
                    </Link>

                    <Link
                      href="/admin/categories"
                      className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50"
                    >
                      <h3 className="text-lg font-medium text-gray-900">
                        Manage Categories
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Add, edit, and manage product categories
                      </p>
                    </Link>

                    <Link
                      href="/admin/orders"
                      className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50"
                    >
                      <h3 className="text-lg font-medium text-gray-900">
                        Manage Orders
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        View and manage all orders
                      </p>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 