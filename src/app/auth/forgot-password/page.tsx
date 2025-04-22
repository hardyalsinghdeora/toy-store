import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import ForgotPasswordForm from '@/app/components/auth/ForgotPasswordForm';

export default async function ForgotPasswordPage() {
  const session = await getServerSession(authOptions);
  
  if (session) {
    redirect('/');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Link href="/" className="flex justify-center">
            <Image
              src="/images/logo.svg"
              alt="Toy Shop Logo"
              width={150}
              height={40}
              priority
            />
          </Link>
        </div>

        <ForgotPasswordForm />
      </div>
    </div>
  );
} 