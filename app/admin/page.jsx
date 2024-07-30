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
        <div className="max-w-7xl mx-auto py-20">
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
                            <td className='py-3'>{sheet.project_title}</td>
                            <td className='py-3'>{sheet.number_of_student}</td>
                            <td className='py-3'>
                                <button className='bg-[#0d94b6] hover:bg-[#0d829c] text-white py-2 px-3 rounded mr-2 transition duration-200'>
                                    Edit
                                </button>
                                <button className='bg-[#ff0000] hover:bg-[#e60000] text-white py-2 px-3 rounded transition duration-200'>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>



















        </div>
    )
}

export default page