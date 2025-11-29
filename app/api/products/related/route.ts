import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) return NextResponse.json({ error: "external error" }, { status: 502 });
    const items = await res.json();

    const current = items.find((p: any) => String(p.id) === String(id));
    if (!current) return NextResponse.json([], { status: 200 });

    const related = items.filter((p: any) => p.category === current.category && p.id !== current.id).slice(0, 4);
    return NextResponse.json(related, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "internal" }, { status: 500 });
  }
}
