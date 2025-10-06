'use client';
import { useState } from 'react';

export default function Page() {
  const [url, setUrl] = useState('https://produto.mercadolivre.com.br/MLB3630612443');
  const [pics, setPics] = useState<string[]>([]);
  const [title, setTitle] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const fetchPics = async () => {
    setLoading(true);
    const res = await fetch('/api/baixar-fotos', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ url }) });
    const data = await res.json();
    setTitle(data.title || '');
    setPics(data.pictures || []);
    setLoading(false);
  };

  return (
    <section className="card">
      <h2 className="text-lg mb-3">Baixar fotos de um anúncio</h2>
      <label className="label">Link do anúncio</label>
      <input className="input mb-2" value={url} onChange={e=>setUrl(e.target.value)} />
      <button className="btn" onClick={fetchPics} disabled={loading}>{loading ? 'Buscando...' : 'Buscar fotos'}</button>
      {title && <p className="mt-3 opacity-80">Título: {title}</p>}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        {pics.map((p,i)=>(
          <img key={i} src={p} className="rounded border border-white/10" />
        ))}
      </div>
    </section>
  )
}
