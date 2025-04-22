import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: 'Action Figures',
        description: 'Collectible action figures and figurines',
        image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      },
    }),
    prisma.category.create({
      data: {
        name: 'Board Games',
        description: 'Classic and modern board games for all ages',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      },
    }),
    prisma.category.create({
      data: {
        name: 'Building Blocks',
        description: 'Creative building sets and construction toys',
        image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      },
    }),
    prisma.category.create({
      data: {
        name: 'Dolls',
        description: 'Fashion dolls and accessories',
        image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      },
    }),
  ])

  // Create products
  await Promise.all([
    // Action Figures
    prisma.product.create({
      data: {
        name: 'Super Hero Action Figure',
        description: 'Highly detailed 12-inch action figure with multiple accessories',
        price: 29.99,
        stock: 50,
        images: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        ageRange: '6+',
        brand: 'HeroToys',
        featured: true,
        categoryId: categories[0].id,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Dragon Warrior Figure',
        description: 'Mythical dragon warrior with light-up features',
        price: 39.99,
        stock: 30,
        images: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        ageRange: '8+',
        brand: 'MythicToys',
        featured: false,
        categoryId: categories[0].id,
      },
    }),

    // Board Games
    prisma.product.create({
      data: {
        name: 'Adventure Quest Board Game',
        description: 'Strategic board game for 2-4 players',
        price: 49.99,
        stock: 25,
        images: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        ageRange: '10+',
        brand: 'GameMasters',
        featured: true,
        categoryId: categories[1].id,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Family Fun Card Game',
        description: 'Fast-paced card game for the whole family',
        price: 19.99,
        stock: 40,
        images: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        ageRange: '6+',
        brand: 'FamilyGames',
        featured: false,
        categoryId: categories[1].id,
      },
    }),

    // Building Blocks
    prisma.product.create({
      data: {
        name: 'Space Explorer Building Set',
        description: '200-piece building set with space theme',
        price: 34.99,
        stock: 35,
        images: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        ageRange: '5+',
        brand: 'BuildIt',
        featured: true,
        categoryId: categories[2].id,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Castle Construction Kit',
        description: 'Medieval castle building set with 500 pieces',
        price: 59.99,
        stock: 20,
        images: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        ageRange: '8+',
        brand: 'BuildIt',
        featured: false,
        categoryId: categories[2].id,
      },
    }),

    // Dolls
    prisma.product.create({
      data: {
        name: 'Fashion Doll Set',
        description: 'Doll with 3 outfits and accessories',
        price: 24.99,
        stock: 45,
        images: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        ageRange: '3+',
        brand: 'DollHouse',
        featured: true,
        categoryId: categories[3].id,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Baby Doll with Accessories',
        description: 'Interactive baby doll with feeding set',
        price: 32.99,
        stock: 30,
        images: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
        ageRange: '3+',
        brand: 'DollHouse',
        featured: false,
        categoryId: categories[3].id,
      },
    }),
  ])

  // Create an admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@example.com',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  console.log('Database has been seeded. 🌱')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 