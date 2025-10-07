
'use client';
import { useState } from 'react';
export default function Page(){
  const [texto,setTexto]=useState('Compatível com Windows e macOS. Dual Band 2.4/5 GHz. USB 3.0. Plug & Play.');
  const [resp,setResp]=useState<any>(null);
  const analisar=async()=>{ const r=await fetch('/api/analisar-descricao',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({texto})}); setResp(await r.json()); };
  return (
    <section className="card">
      <h2 className="text-lg font-semibold mb-3">Analisar Descrição</h2>
      <textarea className="input" rows={10} value={texto} onChange={e=>setTexto(e.target.value)} />
      <button className="btn mt-3" onClick={analisar}>Analisar</button>
      {resp && <div className="mt-4"><p><b>Nota:</b> {resp.score}/100</p><ul className="list-disc pl-6">{resp.sugestoes.map((s:string,i:number)=>(<li key={i}>{s}</li>))}</ul><h3 className="font-semibold mt-3">Reescrita sugerida</h3><pre className="whitespace-pre-wrap">{resp.reescrita}</pre></div>}
    </section>
  );
}
