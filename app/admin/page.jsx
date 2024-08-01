'use client'
import { useEffect, useState } from 'react'

import Link from 'next/link'
import React from 'react'
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
                <h1 className='text-3xl'>Admin</h1>

                <Link href='/admin/add'>
                    <button className='bg-[#0d94b6] hover:bg-[#0d829c] text-white py-3 px-4 rounded mt-10 transition duration-200'>
                        + Add New Sheet
                    </button>
                </Link>


                {/* table with sheet data */}

                <table className='w-full mt-10'>
                    <thead>
                        <tr className='bg-[#f0f0f0] text-gray-900'>
                            <th className='py-3'>Project Title</th>
                            <th className='py-3'>Number of Student</th>
                            <th className='py-3'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sheetData.map(sheet => (
                            <tr key={sheet.id} className='border-b border-gray-200'>
                                <td className='py-3 text-center'>{sheet.project_title}</td>
                                <td className='py-3 text-center'>{sheet.number_of_student}</td>
                                <td className='py-3 flex justify-center text-sm'>
                                    <Link href={`/admin/edit/${sheet.id}`}>
                                        <button className='bg-[#0d94b6] hover:bg-[#0d829c] text-white py-2 px-5 rounded mr-2'>
                                            Edit
                                        </button>
                                    </Link>
                                    <button className='bg-[#ff4d4d] hover:bg-[#ff3333] text-white py-2 px-5 rounded'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default page