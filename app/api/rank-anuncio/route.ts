
import { NextResponse } from "next/server";
export async function POST(req: Request){
  const { keyword='', url='' } = await req.json();
  const m = String(url).match(/MLB\d+/);
  if(!m) return NextResponse.json({ error:'ID inválido' }, { status:400 });
  const id = m[0];
  let page=0, total=0;
  while(page<10){
    const r = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${encodeURIComponent(keyword)}&offset=${page*50}&limit=50`);
    const d = await r.json();
    total = d?.paging?.total ?? total;
    const idx = (d?.results||[]).findIndex((it:any)=>it.id===id);
    if(idx!==-1){
      const rank = page*50+idx+1;
      return NextResponse.json({ found:true, id, page:page+1, position:idx+1, rank, total });
    }
    page++;
  }
  return NextResponse.json({ found:false, message:'Não encontrado nas 10 primeiras páginas.' });
}
