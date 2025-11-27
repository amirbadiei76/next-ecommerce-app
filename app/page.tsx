import ProductCard from "@/components/not-shared/product/ProductCard";
import Container from "@/components/shared/layout/Container";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const cards = [
        {
          id: 0,
          title: 'Product 0',
          image: './assets/images/product0.png',
          price: 23.3
        },
        {
          id: 1,
          title: 'Product 1',
          image: './assets/images/product1.png',
          price: 23.3
        },
        {
          id: 2,
          title: 'Product 2',
          image: './assets/images/product2.png',
          price: 23.3
        },
        {
          id: 3,
          title: 'Product 3',
          image: './assets/images/product3.png',
          price: 23.3
        },
        {
          id: 4,
          title: 'Product 4',
          image: './assets/images/product4.png',
          price: 23.3
        },
        {
          id: 5,
          title: 'Product 5',
          image: './assets/images/product5.png',
          price: 23.3
        },
        {
          id: 6,
          title: 'Product 6',
          image: './assets/images/product6.png',
          price: 23.3
        },
        {
          id: 7,
          title: 'Product 7',
          image: './assets/images/product7.png',
          price: 23.3
        }
    ]

    return (
        <main>
            <Container >
                <section className="flex flex-col gap-4 mb-4">
                    <h2>Best Ecommerce Site</h2>
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quasi incidunt reprehenderit pariatur maxime, ipsa deserunt repellendus quod reiciendis explicabo aspernatur odit fugit error, libero vitae similique exercitationem. Ad sequi sunt assumenda qui adipisci officia repellat blanditiis dolor vel voluptatem dolores eos, quod maiores. Porro fuga dignissimos, aliquid culpa eaque nihil cum at adipisci, impedit sint ut sed earum quam sapiente veritatis voluptatibus, id atque inventore sequi dolor qui eius unde. Accusamus illum quibusdam, voluptate officiis dolorum fugit voluptatibus perspiciatis? Officia porro sint non libero perferendis laboriosam culpa doloribus sapiente ad dolorum qui quia ut, molestiae nesciunt veritatis quis tempora?</p>
                    <Link href='/products'>Shop Now</Link>
                </section>
                <section className=" flex flex-col gap-4">
                    <h2>Latest Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-between">
                      {
                        cards.map((item) => {
                          return <ProductCard key={item.id} {...item} />
                        })
                      }
                    </div>
                </section>
            </Container>
        </main>
    );
}
