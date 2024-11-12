import { NextResponse } from 'next/server';
import prisma from '@/app/utils/db';
import { z } from 'zod';

// Zod Schema for Guitar Validation
const GuitarSchema = z.object({
  name: z.string().min(1, "Name is required"),
  brand: z.string().min(1, "Brand is required"),
  price: z.number().positive("Price must be a positive number"),
});

// GET: List all guitars
export async function GET() {
  const guitars = await prisma.guitar.findMany();
  return NextResponse.json(guitars);
}

// POST: Add a new guitar
export async function POST(request: Request) {
  const { name, brand, price } = await request.json();
  
  // Validate input with Zod
  const validatedData = GuitarSchema.safeParse({ name, brand, price });
  if (!validatedData.success) {
    return NextResponse.json({ error: validatedData.error.errors }, { status: 400 });
  }

  const newGuitar = await prisma.guitar.create({
    data: validatedData.data,
  });
  return NextResponse.json(newGuitar);
}

// DELETE: Delete a guitar by ID
export async function DELETE(request: Request) {
  const { id } = await request.json();
  await prisma.guitar.delete({
    where: { id },
  });
  return NextResponse.json({ message: "Guitar deleted successfully" });
}

// PUT: Update a guitar by ID
export async function PUT(request: Request) {
  const { id, name, brand, price } = await request.json();
  
  // Validate input with Zod
  const validatedData = GuitarSchema.safeParse({ name, brand, price });
  if (!validatedData.success) {
    return NextResponse.json({ error: validatedData.error.errors }, { status: 400 });
  }

  const updatedGuitar = await prisma.guitar.update({
    where: { id },
    data: validatedData.data,
  });
  return NextResponse.json(updatedGuitar);
}
