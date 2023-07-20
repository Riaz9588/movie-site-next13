import Link from 'next/link'
import React from 'react'

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-gray-800">404</h1>
            <p className="text-lg text-gray-600">Page Not Found</p>
            <Link href="/" className="mt-4 px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600">Go Back to Home Page</Link>
        </div>
    )
}

export default NotFound