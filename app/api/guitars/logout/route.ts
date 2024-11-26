import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // To logout the user, we simply clear the 'token' cookie from the response
    const response = NextResponse.json({ message: 'Logout successful' });

    // Clear the token cookie by setting an expired date
    response.cookies.set('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',  // Ensure it's secure on production
      maxAge: 0,  // Expire the cookie immediately
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Error during logout:', error);
    return NextResponse.json({ error: 'Logout failed' }, { status: 500 });
  }
}
