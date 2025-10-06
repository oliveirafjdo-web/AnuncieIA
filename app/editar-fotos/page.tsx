'use client';
import { useState } from 'react';

export default function Page() {
  const [file, setFile] = useState<File|null>(null);
  const [preview, setPreview] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const onFile = (e:any) => {
    const f = e.target.files?.[0];
    setFile(f || null);
    if (f) setPreview(URL.createObjectURL(f));
  };

  const send = async () => {
    if (!file) return;
    const form = new FormData();
    form.append('image', file);
    form.append('op', 'remove_bg');
    const res = await fetch('/api/editar-foto', { method: 'POST', body: form });
    const data = await res.json();
    setResult(data?.imageBase64 || '');
  };

  return (
    <section className="card">
      <h2 className="text-lg mb-3">Editor de Fotos (IA)</h2>
      <input type="file" accept="image/*" onChange={onFile} className="mb-3" />
      {preview && <img src={preview} className="rounded mb-3 max-w-sm" />}
      <button className="btn" onClick={send} disabled={!file}>Remover fundo (demo)</button>
      {result && <div className="mt-3"><h3>Resultado</h3><img src={`data:image/png;base64,${result}`} className="rounded max-w-sm" /></div>}
      <p className="opacity-60 text-xs mt-3">* Esta rota é um placeholder. Em produção, configure OPENAI_API_KEY e troque pela chamada real de edição de imagem.</p>
    </section>
  )
}
