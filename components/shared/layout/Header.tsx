"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import MobileDrawer from "./MobileDrawer";
import Container from './Container'
import { useCartStore } from '@/store/CartStore';

export default function Header() {
    const [open, setOpen] = useState(false);
    const count = useCartStore(state => state.items.reduce((s, i) => s + i.quantity, 0));
  

    return (
        <header className="bg-white border-b py-4">
          <Container >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link className="text-xl font-bold" href="/">
                        My Store
                    </Link>
                </div>
        
                <nav className="hidden md:flex">
                    <ul className='className="hidden md:flex items-center gap-6'>
                        <li>
                            <Link href="/" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link href="/products" className="hover:underline">Products</Link>
                        </li>
                        <li>
                            <Link href="/cart" className="hover:underline">
                                Cart
                                {count > 0 && <span className="ml-2 inline-block bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">{count}</span>}
                            </Link>
                        </li>
                    </ul>
                </nav>
        
                <div className="md:hidden">
                    <button
                        onClick={() => setOpen(true)}
                        aria-label="Open menu"
                        className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        
            {/* drawer component */}
            <MobileDrawer open={open} onClose={() => setOpen(false)} side="right" />
          </Container>
        </header>
    );
}
