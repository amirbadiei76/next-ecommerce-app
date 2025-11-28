import Link from "next/link";

type Props = {
    data: {
      title: string;
      subtitle: string;
      image: string;
      cta: string;
    };
};
  
export function HeroSection({ data }: Props) {
    return (
      <section className="flex items-center gap-6 p-6 bg-black text-white rounded-xl">
        <div className="flex-1">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <p className="text-lg opacity-80 mt-2">{data.subtitle}</p>
          <Link href={'/products'} className="mt-4 bg-white text-black px-6 py-3 rounded">
            {data.cta}
          </Link>
        </div>
        <img src={data.image} alt={data.title} className="w-64 h-64 object-cover" />
      </section>
    );
}
  