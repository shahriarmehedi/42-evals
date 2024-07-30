import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'


// POST /api/mandatorySection/[id] and connect to sheet


export const POST = async (req, { params }) => {
    const { id } = params;
    const body = await req.json();
    const { title, description, yes_no } = body;
    const mandatorySectionData = await prisma.mandatorySection.create({
        data: {
            title: title,
            description: description,
            yes_no: yes_no,
            sheet: {
                connect: {
                    id: id
                }
            }
        }
    });

    return NextResponse.json({
        success: true,
        data: mandatorySectionData,
        message: 'Mandatory section created successfully'
    })

}