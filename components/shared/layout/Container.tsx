import React from 'react'



export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className='container mx-auto px-5 sm:px-10 md:px-15 lg:px-20'>
        {children}
        </div>
    )
}
