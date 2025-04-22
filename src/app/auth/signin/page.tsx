import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SignInForm from '@/app/components/auth/SignInForm';

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  
  if (session) {
    redirect('/');
  }

  return (
    <div className="max-w-md w-full mx-auto">
      <div className="text-center">
        <Link href="/" className="inline-flex">
          <Image
            src="/images/logo.svg"
            alt="Toy Shop Logo"
            width={150}
            height={40}
            priority
          />
        </Link>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Or{' '}
          <Link
            href="/auth/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8">
        <SignInForm />
      </div>
    </div>
  );
} 