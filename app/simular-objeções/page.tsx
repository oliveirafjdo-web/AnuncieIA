'use client';
import { useState } from 'react';

export default function Page() {
  const [produto, setProduto] = useState('Adaptador Wi‑Fi Dual Band USB 3.0');
  const [resps, setResps] = useState('');
  const gerar = async () => {
    const res = await fetch('/api/gerar-texto', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ nome: produto, carac: 'Wi‑Fi 5; Dual Band; USB 3.0', tipo:'objeções' }) });
    const data = await res.json();
    setResps(data.objeções || '');
  };
  return (
    <section className="card">
      <h2 className="text-lg mb-3">Simulador de Objeções</h2>
      <label className="label">Produto</label>
      <input className="input mb-3" value={produto} onChange={e=>setProduto(e.target.value)} />
      <button className="btn" onClick={gerar}>Gerar Objeções + Respostas</button>
      {resps && <pre className="whitespace-pre-wrap mt-3">{resps}</pre>}
    </section>
  )
}
