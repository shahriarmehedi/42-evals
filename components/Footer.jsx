import React from 'react'

function Footer() {
    return (
        <footer className='bg-gray-800 text-white py-20'>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold">About Us</h2>
                        <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget magna.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Contact Us</h2>
                        <p className="mt-4">123 Main Street</p>
                        <p>City, State</p>
                        <p>
                            <a href="tel:555-555-5555">555-555-5555</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer