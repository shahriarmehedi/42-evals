import prisma from '@lib/prisma';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'

export async function get(req) {
    const { sheet } = req.query
    const sheetData = await prisma.sheet.findUnique({
        where: {
            sheet
        }
    })
    if (!sheetData) {
        return NextResponse.error('Sheet not found', 404)
    }
    return NextResponse.json(sheetData)
}