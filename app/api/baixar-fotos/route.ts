Hexport const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    const match = String(url||'').match(/MLB\d+/);
    if (!match) return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
    const id = match[0];

    const r = await fetch(`https://api.mercadolibre.com/items/${id}`, { cache: 'no-store' });
    if (!r.ok) {
      const t = await r.text();
      return NextResponse.json({ error: 'Anúncio não encontrado', detail: t }, { status: 404 });
    }
    const d = await r.json();
    const pictures = (d?.pictures || []).map((p:any)=>p.url);
    return NextResponse.json({ id, title: d.title, pictures });
  } catch (e:any) {
    return NextResponse.json({ error: 'Falha interna', detail: e.message }, { status: 500 });
  }
}
