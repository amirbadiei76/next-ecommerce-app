import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const limit = Math.max(1, Number(url.searchParams.get("limit") ?? "4"));

    const externalRes = await fetch("https://fakestoreapi.com/products");

    if (!externalRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch external products" },
        { status: 502 }
      );
    }

    const data = await externalRes.json();
    const items: any[] = Array.isArray(data) ? data : data.products ?? [];

    if (!items.length) {
      return NextResponse.json([], { status: 200 });
    }

    const sample = items[0];
    const hasDateField = Boolean(sample && (sample.createdAt || sample.date));

    const sorted = items.slice();
    if (hasDateField) {
      sorted.sort((a: any, b: any) => {
        const ta = new Date(a.createdAt ?? a.date).getTime();
        const tb = new Date(b.createdAt ?? b.date).getTime();
        return tb - ta;
      });
    } else {
      sorted.sort((a: any, b: any) => {
        const ai = Number(a.id ?? 0);
        const bi = Number(b.id ?? 0);
        return bi - ai;
      });
    }

    const latest = sorted.slice(0, limit);

    return NextResponse.json(latest, { status: 200 });
  } catch (err) {
    console.error("/api/products/latest error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}