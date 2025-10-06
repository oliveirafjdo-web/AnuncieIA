import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { titulo } = await req.json();
  const t = String(titulo||'').toLowerCase();
  const key = t.split(/\s+|\W+/).filter(Boolean);
  const base = new Set<string>([...key, 'adaptador','wifi','dual band','usb 3.0','alta velocidade','plug & play','windows','mac']);
  return NextResponse.json({ tags: Array.from(base).slice(0, 12) });
}
