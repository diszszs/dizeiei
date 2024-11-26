import { NextResponse } from 'next/server';
import prisma from '@/app/utils/db';

export async function GET() {
  try {
    // Fetch guitars from the database
    const guitars = await prisma.guitar.findMany();
    return NextResponse.json(guitars);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch guitars' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  // Parsing incoming request data
  const { name, brand, price } = await request.json();

  // Validate the request data
  if (!name || !brand || !price) {
    return NextResponse.json({ error: 'Name, brand, and price are required' }, { status: 400 });
  }

  try {
    // Create a new guitar entry in the database
    const newGuitar = await prisma.guitar.create({
      data: {
        name,
        brand,
        price: parseFloat(price), // Ensure the price is a number
        likeScore: 0, // Default value for likeScore
      },
    });
    return NextResponse.json(newGuitar, { status: 201 }); // Returning the created guitar
  } catch (error) {
    console.error('Failed to create guitar:', error);
    return NextResponse.json({ error: 'Failed to create guitar' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const { id, name, brand, price } = await request.json();

  // Validate the data before updating
  if (!id || !name || !brand || !price) {
    return NextResponse.json({ error: 'ID, name, brand, and price are required' }, { status: 400 });
  }

  try {
    // Update an existing guitar in the database
    const updatedGuitar = await prisma.guitar.update({
      where: { id },
      data: { name, brand, price: parseFloat(price) },
    });
    return NextResponse.json(updatedGuitar);
  } catch (error) {
    console.error('Failed to update guitar:', error);
    return NextResponse.json({ error: 'Failed to update guitar' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  // Check if ID is provided
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  try {
    // Delete the guitar from the database
    await prisma.guitar.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Guitar deleted successfully' });
  } catch (error) {
    console.error('Failed to delete guitar:', error);
    return NextResponse.json({ error: 'Failed to delete guitar' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  const { id } = await request.json();

  // Check if ID is provided
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }

  try {
    // Increment the likeScore for a specific guitar
    const updatedGuitar = await prisma.guitar.update({
      where: { id },
      data: { likeScore: { increment: 1 } },
    });
    return NextResponse.json(updatedGuitar);
  } catch (error) {
    console.error('Failed to update like score:', error);
    return NextResponse.json({ error: 'Failed to update like score' }, { status: 500 });
  }
}
