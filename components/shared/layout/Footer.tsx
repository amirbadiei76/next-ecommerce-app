import React from 'react'
import Container from './Container'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='bg-white border-t py-4'>
            <Container >
                <div className='flex flex-col gap-6 md:flex-row justify-between items-center'>
                    <p>Ecommerce App © 2025</p>
                    <div className='flex flex-col gap-6'>
                        <strong>Quick Links</strong>
                        <nav>
                            <ul className='flex justify-between items-center gap-4'>
                                <li><Link href="/" className="hover:underline">Home</Link></li>
                                <li><Link href="/products" className="hover:underline">Products</Link></li>
                                <li><Link href="/cart" className="hover:underline">Cart</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
