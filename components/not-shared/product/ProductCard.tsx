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
      <article className='bg-light-between flex flex-col items-center sm:items-start w-full justify-between gap-1.5 sm:gap-3 p-2 sm:p-4 border border-gray-500 rounded-md'>
          <figure className='flex flex-col w-full'>
              <img className='w-20 h-20 object-contain self-center' src={image} alt={title} />
              <figcaption className='text-justify'>{title}</figcaption>
          </figure>
          <p>Price: {price} $</p>
          <Link className='bg-blue-400 rounded px-4 self-center py-1.5 hover:bg-blue-500' href={`/products/${id}`}>View Details</Link>
      </article>
    )
}
