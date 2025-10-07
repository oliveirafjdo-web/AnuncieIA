
'use client';
import { useState } from 'react';
export default function Page(){
  const [titulo,setTitulo]=useState('Adaptador Wi‑Fi 5 Dual Band USB 3.0');
  const [tags,setTags]=useState<string[]>([]);
  const gerar=async()=>{ const r=await fetch('/api/gerar-tags',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({titulo})}); const d=await r.json(); setTags(d.tags||[]); };
  return (
    <section className="card">
      <h2 className="text-lg font-semibold mb-3">Gerador de Tags</h2>
      <input className="input" value={titulo} onChange={e=>setTitulo(e.target.value)} />
      <button className="btn mt-3" onClick={gerar}>Gerar tags</button>
      <div className="mt-3 flex flex-wrap gap-2">{tags.map((t,i)=>(<span key={i} className="px-2 py-1 bg-gray-200 rounded">{t}</span>))}</div>
    </section>
  );
}
