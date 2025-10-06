'use client';
import { useState } from 'react';

export default function Page() {
  const [titulo, setTitulo] = useState('Adaptador Wi‑Fi Dual Band USB 3.0');
  const [tags, setTags] = useState<string>('');
  const gerar = async () => {
    const res = await fetch('/api/gerar-tags', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ titulo }) });
    const data = await res.json();
    setTags((data.tags || []).join(', '));
  };
  return (
    <section className="card">
      <h2 className="text-lg mb-3">Gerador de Tags</h2>
      <input className="input mb-2" value={titulo} onChange={e=>setTitulo(e.target.value)} />
      <button className="btn" onClick={gerar}>Gerar Tags</button>
      {tags && <p className="mt-3">{tags}</p>}
    </section>
  )
}
