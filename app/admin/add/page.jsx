import React from 'react'

function page() {
    return (
        <div className="max-w-7xl mx-auto py-20">
            <h1 className='text-3xl'>Add a new sheet</h1>

            {/* project_title,
        number_of_student,
        introduction,
        guidelines,
        attachments,
        optional_bonus_sections */}

            <form className='mt-10'>
                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <label htmlFor="project_title">Project Title</label>
                        <input type="text" id='project_title' className=' bg-zinc-800 w-full border border-zinc-600 rounded p-2' />
                    </div>
                    <div>
                        <label htmlFor="number_of_student">Number of Student</label>
                        <input type="number" id='number_of_student' className=' bg-zinc-800 w-full border border-zinc-600 rounded p-2' />
                    </div>
                    <div>
                        <label htmlFor="introduction">Introduction</label>
                        <textarea id='introduction' className=' bg-zinc-800 w-full border border-zinc-600 rounded p-2'></textarea>
                    </div>
                    <div>
                        <label htmlFor="guidelines">Guidelines</label>
                        <textarea id='guidelines' className=' bg-zinc-800 w-full border border-zinc-600 rounded p-2'></textarea>
                    </div>
                    <div>
                        <label htmlFor="attachments">Attachments</label>
                        <textarea id='attachments' className=' bg-zinc-800 w-full border border-zinc-600 rounded p-2'></textarea>
                    </div>
                    <div>
                        <label htmlFor="optional_bonus_sections">Optional Bonus Sections</label>
                        <input type="text" id='optional_bonus_sections' className='bg-zinc-800 w-full border border-zinc-600 rounded p-2' />
                    </div>
                </div>

                <button className='bg-[#0d94b6] hover:bg-[#0d829c] text-white py-3 px-4 rounded mt-10 transition duration-200'>
                    Save
                </button>
            </form>






        </div>
    )
}

export default page