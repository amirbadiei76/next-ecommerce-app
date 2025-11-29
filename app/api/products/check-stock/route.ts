import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    if (!body?.id) return NextResponse.json({ ok: false }, { status: 400 });

    if (Number(body.id) === 10 && body.qty > 1) {
      return NextResponse.json({ ok: false, available: 1 });
    }
    return NextResponse.json({ ok: true, available: 99 });
  } catch (err) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
