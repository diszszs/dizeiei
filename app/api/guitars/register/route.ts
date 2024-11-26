import { NextResponse } from 'next/server';
import prisma from '@/app/utils/db';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  const { email, password, firstName, lastName } = await request.json();

  // Validate that email and password are provided
  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
  }

  // Hash the password before storing it in the database
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Create the user in the database
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
      },
    });

    return NextResponse.json({ message: 'Registration successful' });
  } catch (error: any) {
    console.error('Error during registration:', error);

    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
    }

    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}
