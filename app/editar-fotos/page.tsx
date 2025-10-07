
'use client';
import { useState } from 'react';
export default function Page(){
  const [file,setFile]=useState<File|null>(null);
  const [result,setResult]=useState('');
  const enviar=async()=>{
    if(!file) return;
    const form=new FormData(); form.append('image',file);
    const r=await fetch('/api/editar-foto',{method:'POST',body:form});
    const d=await r.json(); setResult(d.imageBase64?`data:image/png;base64,${d.imageBase64}`:'');
  };
  return (
    <section className="card">
      <h2 className="text-lg font-semibold mb-3">Editor de Fotos (demo)</h2>
      <input type="file" accept="image/*" onChange={e=>setFile(e.target.files?.[0]||null)} />
      <button className="btn mt-3" onClick={enviar} disabled={!file}>Processar</button>
      {result && <img src={result} className="mt-3 max-w-md rounded" />}
      <p className="text-xs text-gray-500 mt-2">* Placeholder — troque por edição IA real quando quiser.</p>
    </section>
  );
}
