import { prisma } from '../src/lib/prisma';

async function updateUserRole(email: string, role: 'USER' | 'ADMIN') {
  try {
    const user = await prisma.user.update({
      where: { email },
      data: { role },
    });
    console.log(`User role updated successfully:`, {
      email: user.email,
      name: user.name,
      role: user.role,
    });
  } catch (error) {
    console.error('Error updating user role:', error);
  }
}

// Example usage:
// updateUserRole('user@example.com', 'ADMIN'); 