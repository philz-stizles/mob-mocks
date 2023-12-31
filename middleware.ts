import { withAuth } from 'next-auth/middleware';

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    pages: {
      signIn: '/auth',
    },
    // `withAuth` augments your `Request` with the user's token.

    callbacks: {
      authorized({ req, token }) {
        // `/admin` requires admin role
        // console.log(req, token);
        if (req.nextUrl.pathname === '/admin') {
          return token?.userRole === 'admin';
        }
        // `/me` only requires the user to be logged in
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ['/instructors/:path*'],
};

// import { withAuth } from 'next-auth/middleware';

// // More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
// export default withAuth({
//   callbacks: {
//     authorized({ req, token }) {
//       // `/admin` requires admin role
//       if (req.nextUrl.pathname === '/admin') {
//         return token?.userRole === 'admin';
//       }
//       // `/me` only requires the user to be logged in
//       return !!token;
//     },
//   },
// });

// export const config = { matcher: ['/instructors/:path*'] };
