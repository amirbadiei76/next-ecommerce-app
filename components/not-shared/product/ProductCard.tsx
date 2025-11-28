import Link from 'next/link';
import React from 'react'

export type TProductCard = {
  id: string;
  description?: string;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, title, price, image }: TProductCard) {
    return (
      <article className="bg-white rounded shadow hover:cursor-pointer">
        <Link href={`/products/${id}`} className="flex flex-col justify-between h-full p-2 sm:p-4">
          <div className="w-full h-48 relative mb-4">
            <img className='object-contain w-full h-full' src={image} alt={title} />
          </div>

          <h3 className="text-sm text-justify font-medium mb-1 line-clamp-2">{title}</h3>
          <div className="mt-auto flex items-center justify-between">
            <span className="text-lg font-semibold">{price}$</span>
            <button className="text-sm bg-indigo-600 text-white px-3 py-1 rounded">View</button>
          </div>
        </Link>
      </article>
    )
}
