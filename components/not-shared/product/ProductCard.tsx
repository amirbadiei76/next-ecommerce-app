import Link from 'next/link';
import React from 'react'

type TProductCard = {
  id: number;
  description?: string;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, title, price, image }: TProductCard) {
    return (
      <article className='bg-light-between flex flex-col items-center w-full justify-between gap-3 p-4 border border-gray-500 rounded-md'>
          <figure>
              <img src={image} alt={title} />
              <figcaption>{title}</figcaption>
          </figure>
          <p>Price: {price} $</p>
          <Link className='bg-blue-400 rounded px-4 py-1.5' href={`/products/${id}`}>View Details</Link>
      </article>
    )
}
