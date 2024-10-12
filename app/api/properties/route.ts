import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get('location');
  const type = searchParams.get('type');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');

  let whereClause: any = {};

  if (location) {
    whereClause.location = { contains: location, mode: 'insensitive' };
  }
  if (type) {
    whereClause.type = type;
  }
  if (minPrice || maxPrice) {
    whereClause.price = {};
    if (minPrice) whereClause.price.gte = parseInt(minPrice);
    if (maxPrice) whereClause.price.lte = parseInt(maxPrice);
  }

  try {
    const properties = await prisma.property.findMany({
      where: whereClause,
    });
    return NextResponse.json(properties);
  } catch (error) {
    console.error('Failed to fetch properties:', error);
    return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const data = await request.json();
  try {
    const newProperty = await prisma.property.create({
      data: data,
    });
    return NextResponse.json(newProperty, { status: 201 });
  } catch (error) {
    console.error('Failed to create property:', error);
    return NextResponse.json({ error: 'Failed to create property' }, { status: 500 });
  }
}