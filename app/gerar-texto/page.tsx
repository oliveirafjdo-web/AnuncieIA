'use client';
import { useState } from 'react';

export default function GerarTexto() {
  const [nome, setNome] = useState('Adaptador Wi‑Fi Dual Band USB 3.0');
  const [carac, setCarac] = useState('Wi‑Fi 5; 2.4/5 GHz; Plug & Play; Windows/Mac');
  const [saida, setSaida] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const gerar = async (tipo: string) => {
    setLoading(true);
    const res = await fetch('/api/gerar-texto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, carac, tipo })
    });
    const data = await res.json();
    setSaida(data);
    setLoading(false);
  };

  return (
    <section className="card">
      <h2 className="text-lg mb-3">Gerador de Textos</h2>
      <label className="label">Produto</label>
      <input className="input mb-2" value={nome} onChange={e=>setNome(e.target.value)} />
      <label className="label">Principais características (separe por ;)</label>
      <input className="input mb-4" value={carac} onChange={e=>setCarac(e.target.value)} />
      <div className="flex gap-2 mb-3">
        <button className="btn" onClick={()=>gerar('titulo')} disabled={loading}>Gerar Título</button>
        <button className="btn" onClick={()=>gerar('descricao')} disabled={loading}>Gerar Descrição</button>
        <button className="btn-secondary" onClick={()=>gerar('objeções')} disabled={loading}>Quebra de Objeções</button>
      </div>
      {loading && <p>Gerando...</p>}
      {saida && (
        <div className="grid2">
          {saida.titulo && <div><h3 className="mb-1">Título</h3><pre className="whitespace-pre-wrap">{saida.titulo}</pre></div>}
          {saida.descricao && <div><h3 className="mb-1">Descrição</h3><pre className="whitespace-pre-wrap">{saida.descricao}</pre></div>}
          {saida.objeções && <div className="md:col-span-2"><h3 className="mb-1">Objeções</h3><pre className="whitespace-pre-wrap">{saida.objeções}</pre></div>}
          {saida.tags && <div className="md:col-span-2"><h3 className="mb-1">Tags sugeridas</h3><pre className="whitespace-pre-wrap">{saida.tags}</pre></div>}
        </div>
      )}
    </section>
  )
}
