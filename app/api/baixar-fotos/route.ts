
import { NextResponse } from "next/server";
export async function POST(req: Request){
  const { url } = await req.json();
  const m = String(url||'').match(/MLB\d+/);
  if(!m) return NextResponse.json({ error:'ID inválido' }, { status:400 });
  const id = m[0];
  const r = await fetch(`https://api.mercadolibre.com/items/${id}`);
  if(!r.ok) return NextResponse.json({ error:'Anúncio não encontrado' }, { status:404 });
  const d = await r.json();
  const pictures = (d.pictures||[]).map((p:any)=>p.url);
  return NextResponse.json({ id, title: d.title, pictures });
}
