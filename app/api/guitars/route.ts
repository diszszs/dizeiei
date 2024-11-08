import { NextResponse } from 'next/server';
import prisma from '@/app/utils/db';

export async function GET() {
  const guitars = await prisma.guitar.findMany();
  return NextResponse.json(guitars);
}

export async function POST(request: Request) {
  const { name, brand, price } = await request.json();
  const newGuitar = await prisma.guitar.create({
    data: {
      name,
      brand,
      price: parseFloat(price),
    },
  });
  return NextResponse.json(newGuitar);
}