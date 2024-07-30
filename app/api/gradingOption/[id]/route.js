import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic'


// POST /api/gradingOption/[id] and connect to sheet


export const POST = async (req, { params }) => {
    const { id } = params;
    const body = await req.json();
    const {
        ok,
        outstanding,
        empty_work,
        incomplete_work,
        invalid_compilation,
        norme,
        cheat,
        crash,
        concerning_situations,
        leaks,
        forbidden_functions,
        cannot_support
    } = body;
    const gradingOptionData = await prisma.gradingOption.create({
        data: {
            ok,
            outstanding,
            empty_work,
            incomplete_work,
            invalid_compilation,
            norme,
            cheat,
            crash,
            concerning_situations,
            leaks,
            forbidden_functions,
            cannot_support,
            sheet: {
                connect: {
                    id: id
                }
            }
        }
    });

    return NextResponse.json({
        success: true,
        data: gradingOptionData,
        message: 'Grading option created successfully'
    })

}