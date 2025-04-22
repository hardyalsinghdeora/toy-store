import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuthPage = req.nextUrl.pathname.startsWith('/auth');
    const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');
    const isAccountRoute = req.nextUrl.pathname.startsWith('/account');

    // Redirect logged-in users away from auth pages
    if (isAuthPage && token) {
      return NextResponse.redirect(new URL('/', req.url));
    }

    // Handle admin routes
    if (isAdminRoute) {
      if (!token) {
        return NextResponse.redirect(new URL('/auth/signin', req.url));
      }
      if (token.role !== 'ADMIN') {
        return NextResponse.redirect(new URL('/', req.url));
      }
    }

    // Handle account routes
    if (isAccountRoute && !token) {
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const isAuthPage = req.nextUrl.pathname.startsWith('/auth');
        const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');
        const isAccountRoute = req.nextUrl.pathname.startsWith('/account');

        // Only require token for protected routes
        if (isAdminRoute || isAccountRoute) {
          return !!token;
        }

        // Allow access to auth pages without token
        if (isAuthPage) {
          return true;
        }

        return true;
      },
    },
  }
);

export const config = {
  matcher: ['/admin/:path*', '/auth/:path*', '/account/:path*'],
}; 