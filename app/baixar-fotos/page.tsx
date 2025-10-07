
'use client';
import { useState } from 'react';
export default function Page(){
  const [url,setUrl]=useState('https://produto.mercadolivre.com.br/MLB3630612443');
  const [fotos,setFotos]=useState<string[]>([]);
  const [titulo,setTitulo]=useState('');
  const [loading,setLoading]=useState(false);
  const buscar=async()=>{
    setLoading(true);
    const r=await fetch('/api/baixar-fotos',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({url})});
    const d=await r.json();
    setTitulo(d.title||'');
    setFotos(d.pictures||[]);
    setLoading(false);
  };
  return (
    <section className="card">
      <h2 className="text-lg font-semibold mb-3">Baixar Fotos do Anúncio</h2>
      <label className="label">Link do anúncio ML</label>
      <input className="input" value={url} onChange={e=>setUrl(e.target.value)} />
      <button className="btn mt-3" onClick={buscar} disabled={loading}>{loading?'Buscando...':'Buscar fotos'}</button>
      {titulo && <p className="mt-3 text-sm text-gray-600"><b>Título:</b> {titulo}</p>}
      <div className="grid3 mt-4">{fotos.map((f,i)=>(<img key={i} src={f} className="rounded border" />))}</div>
    </section>
  );
}
