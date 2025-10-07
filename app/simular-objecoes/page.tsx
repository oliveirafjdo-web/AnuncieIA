
'use client';
import { useState } from 'react';
export default function Page(){
  const [produto, setProduto] = useState('Adaptador Wi‑Fi 5 Dual Band');
  const [resp, setResp] = useState('');
  const gerar = async ()=>{
    const r = await fetch('/api/gerar-texto',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({produto,features:'',modo:'objeções'})});
    const d = await r.json(); setResp(d.objeções||d.texto||'');
  };
  return (
    <section className="card">
      <h2 className="text-lg font-semibold mb-3">Simulador de Objeções</h2>
      <input className="input" value={produto} onChange={e=>setProduto(e.target.value)} />
      <button className="btn mt-3" onClick={gerar}>Gerar</button>
      {resp && <pre className="whitespace-pre-wrap mt-3">{resp}</pre>}
    </section>
  );
}
