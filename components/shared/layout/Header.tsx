import Link from 'next/link'
import React from 'react'
import Container from './Container'

export default function Header() {
    return (
        <header className='py-4'>
            <Container >
                <div className='flex justify-between items-center'>
                    <h1>Ecommerce App</h1>
                    <nav className=''>
                        <ul className='list-none flex justify-between items-center gap-10'>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/products'>Products</Link></li>
                            <li><Link href='/cart'>Cart</Link></li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    )
}
