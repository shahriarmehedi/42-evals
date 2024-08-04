'use client'
import { useEffect, useState } from 'react'

import Link from 'next/link'
import React from 'react'
import Swal from 'sweetalert2'
export const dynamic = 'force-dynamic'

function page() {


    const [sheetData, setSheetData] = useState([])

    useEffect(() => {
        fetch('/api/sheet')
            .then(res => res.json())
            .then(data => {
                setSheetData(data.data)
            })
    }, [])



    return (
        <div className='bg-white text-gray-900 min-h-screen'>
            <div className="max-w-7xl mx-auto pb-20 pt-10">
                <h1 className='text-3xl text-center'>All Evaluations</h1>



                {/* Sheet list */}

                <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {sheetData.map(sheet => (
                        <div className='bg-black bg-opacity-10 p-5 rounded-lg' key={sheet.id}>
                            <h2 className='text-xl'>{sheet.project_title}</h2>
                            <p>{sheet.description}</p>
                            <div className='mt-3 flex justify-end'>
                                <Link href={`/sheets/${sheet.id}`}>
                                    <button className='bg-[#0d94b6] hover:bg-[#0d829c] text-white py-2 px-5 rounded'>
                                        View
                                    </button>
                                </Link>

                            </div>
                        </div>
                    ))}

                </div>




            </div>
        </div>
    )
}

export default page