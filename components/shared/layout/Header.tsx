import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header>
            <nav>
                <ul className='list-none'>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/products'>Products</Link></li>
                    <li><Link href='/cart'>Cart</Link></li>
                </ul>
            </nav>
        </header>
    )
}
