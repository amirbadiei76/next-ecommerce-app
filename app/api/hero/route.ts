import { NextResponse } from "next/server";

export async function GET() {
  try {
    const hero = {
      title: "Upgrade your sound",
      subtitle: "Best audio devices for your daily life",
      image: "/assets/images/hero/headphones.png",
      cta: "Shop Now2",
    };

    return NextResponse.json(hero, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to load hero section" },
      { status: 500 }
    );
  }
}
