import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { keyword, url } = await req.json();
  const match = String(url||'').match(/MLB\d+/);
  if (!match) return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
  const id = match[0];

  let page = 0;
  let found = false;
  let position = 0;
  let total = 0;

  while (!found && page < 10) {
    const res = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${encodeURIComponent(keyword)}&offset=${page*50}&limit=50`);
    if (!res.ok) break;
    const data = await res.json();
    total = data?.paging?.total ?? total;
    const idx = (data?.results || []).findIndex((it:any)=> it.id === id);
    if (idx !== -1) {
      found = true;
      position = page*50 + idx + 1;
      return NextResponse.json({ found, id, page: page+1, position: idx+1, rank: position, total });
    }
    page++;
  }
  return NextResponse.json({ found: false, message: 'Anúncio não encontrado nas 10 primeiras páginas.' });
}
