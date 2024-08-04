'use client'
import { useEffect, useState } from 'react'

import Link from 'next/link'
import React from 'react'
import Swal from 'sweetalert2'
export const dynamic = 'force-dynamic'

function page({ params }) {

    const sheetId = params.id


    const [sheetData, setSheetData] = useState({})

    useEffect(() => {
        fetch(`/api/sheet/${sheetId}`)
            .then(res => res.json())
            .then(data => {
                setSheetData(data.data)
            })
    }, [])

    console.log(sheetData)


    return (
        <div className='bg-white text-gray-900 min-h-screen'>
            <div className="max-w-7xl mx-auto pb-20 pt-10">
                <h1 className='text-3xl text-center'>
                    {sheetData.project_title}
                </h1>



                {/* Sheet details */}

                <div className='mt-10 bg-black bg-opacity-10 p-5 rounded-lg'>
                    <h2 className='text-xl'>{sheetData.project_title}</h2>
                    <p className='pt-5'>
                        {
                            sheetData.introduction ? sheetData.introduction.map((intro, index) => (
                                <p className='pb-2' key={index}>{intro}</p>
                            )) : ''
                        }
                    </p>


                </div>






            </div>
        </div>
    )
}

export default page