'use client'
import { useEffect, useState } from 'react'

import Link from 'next/link'
import React from 'react'
import Swal from 'sweetalert2'
export const dynamic = 'force-dynamic'


function page() {


    // check login status

    useEffect(() => {
        if (sessionStorage.getItem('admin') !== 'true' && localStorage.getItem('admin') !== 'true') {
            Swal.fire({
                icon: 'error',
                title: 'Unauthorized',
                text: 'You need to login first'
            }).then(() => {
                window.location.href = '/admin/login'
            })
        }
    }, [])




    const [sheetData, setSheetData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/sheet')
            .then(res => res.json())
            .then(data => {
                setSheetData(data.data)
                setLoading(false)
            })
    }, [])


    // ------------------------------------- Delete Sheet ------------------------------------------

    const deleteSheet = (id) => {
        fetch(`/api/sheet/${id}`, {
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    Swal.fire(
                        'Deleted!',
                        'The sheet has been deleted from the database.',
                        'success'
                    ).then(() => {
                        setSheetData(sheetData.filter(sheet => sheet.id !== id))
                    })
                } else {
                    Swal.fire(
                        'Error!',
                        'Something went wrong',
                        'error'
                    )
                }
            })
    }

    const handleDeleteSheet = (id) => {

        // Swal confirmation
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                // Swal processing message
                Swal.fire({
                    title: 'Deleting the Sheet',
                    html: 'Please wait...',
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                    }
                })

                deleteSheet(id)
            }
        })
    }






    return (
        <div className='bg-white text-gray-900 min-h-screen'>
            <div className="max-w-7xl mx-auto pb-20 pt-10">
                <h1 className='text-3xl text-center'>Admin Panel</h1>

                <Link href='/admin/add'>
                    <button className='bg-[#0d94b6] hover:bg-[#0d829c] text-white py-3 px-4 rounded mt-10 transition duration-200'>
                        + Add New Evaluation Sheet
                    </button>
                </Link>

                <h2 className='text-2xl mt-10'>All Sheets</h2>

                {/* table with sheet data */}

                <table className='w-full mt-10'>
                    <thead>
                        <tr className='bg-[#f0f0f0] text-gray-900'>
                            <th className='py-3 text-left px-5 font-semibold'>Project Title</th>
                            <th className='py-3 text-left px-5 font-semibold'>Number of Student</th>
                            <th className='py-3 text-left px-5 font-semibold'>Actions</th>
                        </tr>
                    </thead>

                    {
                        loading ? <tbody>
                            <tr>
                                <td colSpan='3' className='text-center py-5'>Loading...</td>
                            </tr>
                        </tbody> :
                            <tbody>
                                {sheetData.map(sheet => (
                                    <tr key={sheet.id} className='border-b border-gray-200'>
                                        <td className='py-3 px-5 '>{sheet.project_title}</td>
                                        <td className='py-3 px-5 '>{sheet.number_of_student}</td>
                                        <td className='py-3 px-5 text-sm'>
                                            <Link href={`/admin/edit/${sheet.id}`}>
                                                <button className='bg-[#0d94b6] hover:bg-[#0d829c] text-white py-2 px-5 rounded mr-2'>
                                                    Edit
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() => handleDeleteSheet(sheet.id)}
                                                className='bg-[#b40f0f] hover:bg-[#b11f1f] text-white py-2 px-5 rounded'>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                    }
                </table>
            </div>
        </div>
    )
}

export default page