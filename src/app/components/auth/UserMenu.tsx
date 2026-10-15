'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { signOut } from 'next-auth/react';
import type { Session } from 'next-auth';

interface UserMenuProps {
  session: Session | null;
}

export default function UserMenu({ session }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!session) {
    return (
      <div className="flex items-center space-x-4">
        <Link
          href="/auth/signin"
          className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
        >
          Sign in
        </Link>
        <Link
          href="/auth/signup"
          className="btn-primary"
        >
          Sign up
        </Link>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
          {session.user.name?.[0] || session.user.email?.[0]}
        </div>
        <span className="hidden md:inline text-gray-700">
          {session.user.name || session.user.email}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            <Link
              href="/account/profile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Profile
            </Link>
            <Link
              href="/account/orders"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Orders
            </Link>
            <button
              onClick={() => signOut()}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 