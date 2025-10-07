
'use client';
import { useState } from 'react';
export default function Page(){
  const [produto, setProduto] = useState('Adaptador Wi‑Fi 5 Dual Band USB 3.0');
  const [features, setFeatures] = useState('Alta velocidade; Estável; Plug & Play; Windows/macOS');
  const [modo, setModo] = useState('descricao');
  const [out, setOut] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const gerar = async () => {
    setLoading(true);
    const r = await fetch('/api/gerar-texto',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({produto,features,modo})});
    const data = await r.json();
    setOut(data);
    setLoading(false);
  };
  return (
    <section className="card">
      <h2 className="text-lg font-semibold mb-3">Gerador de Textos</h2>
      <div className="grid2">
        <div><label className="label">Produto</label><input className="input" value={produto} onChange={e=>setProduto(e.target.value)} /></div>
        <div><label className="label">Características (separe por ;)</label><input className="input" value={features} onChange={e=>setFeatures(e.target.value)} /></div>
      </div>
      <div className="mt-3 flex gap-2">
        <select className="input max-w-xs" value={modo} onChange={e=>setModo(e.target.value)}>
          <option value="titulo">Título</option>
          <option value="descricao">Descrição</option>
          <option value="objeções">Quebra de Objeções</option>
          <option value="tecnica">Texto Técnico</option>
        </select>
        <button className="btn" onClick={gerar} disabled={loading}>{loading?'Gerando...':'Gerar'}</button>
      </div>
      <div className="mt-4 space-y-3">
        {out.titulo && <div><b>Título</b><pre className="whitespace-pre-wrap">{out.titulo}</pre></div>}
        {out.descricao && <div><b>Descrição</b><pre className="whitespace-pre-wrap">{out.descricao}</pre></div>}
        {out.objeções && <div><b>Objeções</b><pre className="whitespace-pre-wrap">{out.objeções}</pre></div>}
        {out.tags && <div><b>Tags</b><pre className="whitespace-pre-wrap">{out.tags}</pre></div>}
      </div>
    </section>
  );
}
