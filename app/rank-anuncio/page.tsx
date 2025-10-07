
'use client';
import { useState } from 'react';
export default function Page(){
  const [keyword,setKeyword]=useState('adaptador wifi dual band usb');
  const [url,setUrl]=useState('https://produto.mercadolivre.com.br/MLB3630612443');
  const [resp,setResp]=useState<any>(null);
  const consultar=async()=>{ const r=await fetch('/api/rank-anuncio',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({keyword,url})}); setResp(await r.json()); };
  return (
    <section className="card">
      <h2 className="text-lg font-semibold mb-3">Rank do Anúncio</h2>
      <div className="grid2">
        <div><label className="label">Palavra‑chave</label><input className="input" value={keyword} onChange={e=>setKeyword(e.target.value)} /></div>
        <div><label className="label">Link do anúncio</label><input className="input" value={url} onChange={e=>setUrl(e.target.value)} /></div>
      </div>
      <button className="btn mt-3" onClick={consultar}>Ver posição</button>
      {resp && (resp.found ? <div className="mt-4"><p>📄 Página: <b>{resp.page}</b></p><p>🔢 Posição na página: <b>{resp.position}</b></p><p>🏆 Rank geral: <b>{resp.rank}</b> de {resp.total}</p></div> : <p className="mt-4">Não encontrado nas primeiras 10 páginas.</p>)}
    </section>
  );
}
