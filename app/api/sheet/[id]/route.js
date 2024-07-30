import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'


// GET /api/sheet/[id]

export const GET = async (req, { params }) => {
    const { id } = params;
    const sheetData = await prisma.sheet.findUnique({
        where: {
            id
        },
    });
    if (!sheetData) {
        return NextResponse.error('Sheet not found', 404)
    };
    return NextResponse.json({
        success: true,
        data: sheetData,
        message: 'Sheet found successfully'
    })
}

// PUT /api/sheet/[id]

export const PUT = async (req, { params }) => {
    const { id } = params;
    const body = await req.json();

    const sheetData = await prisma.sheet.update({
        where: {
            id
        },
        data: body
    });
    return NextResponse.json({
        success: true,
        data: sheetData,
        message: 'Sheet updated successfully'
    })
}

// DELETE /api/sheet/[id]

export const DELETE = async (req, { params }) => {
    const { id } = params;
    const sheetData = await prisma.sheet.delete({
        where: {
            id
        }
    });
    return NextResponse.json({
        success: true,
        data: sheetData,
        message: 'Sheet deleted successfully'
    })
}








