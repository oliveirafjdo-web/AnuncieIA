import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { url } = await req.json();
  const match = String(url||'').match(/MLB\d+/);
  if (!match) return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
  const id = match[0];
  const res = await fetch(`https://api.mercadolibre.com/items/${id}`);
  if (!res.ok) return NextResponse.json({ error: 'Anúncio não encontrado' }, { status: 404 });
  const data = await res.json();
  const pictures = (data?.pictures || []).map((p:any)=>p.url);
  return NextResponse.json({ id, title: data.title, pictures });
}
