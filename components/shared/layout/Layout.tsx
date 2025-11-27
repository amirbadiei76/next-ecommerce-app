import React from 'react'
import Header from './Header'

interface ILayoutProps {
    children: React.ReactNode
}

export default function Layout({ children } : ILayoutProps) {
    return (
        <main className='py-4 md:py-8'>
            { children }
        </main>
    )
}
