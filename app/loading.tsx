import React from 'react'

function loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full border-4 border-t-4 border-gray-600 h-12 w-12">&#128512;</div>
        </div>
    )
}

export default loading