const { PrismaClient } = require('../src/generated/prisma');

// Initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  try {
    // Clean up existing data 
    await prisma.orderItem.deleteMany({});
    await prisma.cartItem.deleteMany({});
    await prisma.wishlistItem.deleteMany({});
    await prisma.product.deleteMany({});
    await prisma.category.deleteMany({});
    await prisma.order.deleteMany({});
    await prisma.payment.deleteMany({});
    await prisma.cart.deleteMany({});
    await prisma.wishlist.deleteMany({});
    await prisma.address.deleteMany({});
    await prisma.user.deleteMany({});

    console.log('Cleaned up existing data');

    // Create categories
    const categories = await Promise.all([
      prisma.category.create({
        data: {
          name: 'Action Figures',
          description: 'Collectible action figures from popular franchises',
          image: '/images/categories/action-figures.jpg',
        },
      }),
      prisma.category.create({
        data: {
          name: 'Dolls',
          description: 'Beautiful dolls for imaginative play',
          image: '/images/categories/dolls.jpg',
        },
      }),
      prisma.category.create({
        data: {
          name: 'Educational',
          description: 'Toys that promote learning and development',
          image: '/images/categories/educational.jpg',
        },
      }),
      prisma.category.create({
        data: {
          name: 'Board Games',
          description: 'Fun board games for the whole family',
          image: '/images/categories/board-games.jpg',
        },
      }),
      prisma.category.create({
        data: {
          name: 'Outdoor Toys',
          description: 'Toys for outdoor play and adventures',
          image: '/images/categories/outdoor.jpg',
        },
      }),
      prisma.category.create({
        data: {
          name: 'Plush Toys',
          description: 'Soft and cuddly plush toys',
          image: '/images/categories/plush.jpg',
        },
      }),
    ]);

    console.log('Created categories');

    // Create sample products
    await Promise.all([
      // Action figures
      prisma.product.create({
        data: {
          name: 'Superhero Action Figure',
          description: 'Posable superhero action figure with accessories',
          price: 19.99,
          stock: 50,
          images: '/images/toys/superhero.jpg',
          ageRange: '4+',
          brand: 'Hero Toys',
          featured: true,
          categoryId: categories[0].id,
        },
      }),
      prisma.product.create({
        data: {
          name: 'Space Explorer Figure',
          description: 'Detailed space explorer figure with light-up helmet',
          price: 24.99,
          stock: 30,
          images: '/images/toys/space-explorer.jpg',
          ageRange: '5+',
          brand: 'Galaxy Toys',
          featured: false,
          categoryId: categories[0].id,
        },
      }),
      
      // Dolls
      prisma.product.create({
        data: {
          name: 'Fashion Doll Set',
          description: 'Fashion doll with multiple outfits and accessories',
          price: 29.99,
          stock: 40,
          images: '/images/toys/fashion-doll.jpg',
          ageRange: '3+',
          brand: 'Dolly World',
          featured: true,
          categoryId: categories[1].id,
        },
      }),
      prisma.product.create({
        data: {
          name: 'Baby Doll with Stroller',
          description: 'Realistic baby doll with stroller and accessories',
          price: 34.99,
          stock: 25,
          images: '/images/toys/baby-doll.jpg',
          ageRange: '3+',
          brand: 'Little Cuties',
          featured: false,
          categoryId: categories[1].id,
        },
      }),
    ]);

    console.log('Created products');
    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 