import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import WishlistItems from '@/app/components/wishlist/WishlistItems'

export default async function WishlistPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/signin')
  }

  const wishlistItems = await prisma.wishlistItem.findMany({
    where: {
      wishlist: {
        userId: session.user.id,
      },
    },
    include: {
      product: {
        include: {
          category: true,
        },
      },
    },
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">Your wishlist is empty</p>
          <a
            href="/products"
            className="btn-primary inline-block"
          >
            Browse Products
          </a>
        </div>
      ) : (
        <WishlistItems items={wishlistItems} />
      )}
    </div>
  )
} 