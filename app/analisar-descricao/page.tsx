'use client';
import { useState } from 'react';

export default function Page() {
  const [text, setText] = useState('Descrição do seu anúncio...');
  const [resp, setResp] = useState<any>(null);

  const analisar = async () => {
    const res = await fetch('/api/analisar-descricao', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ text }) });
    const data = await res.json();
    setResp(data);
  };

  return (
    <section className="card">
      <h2 className="text-lg mb-3">Analisar Descrição</h2>
      <textarea className="input h-48" value={text} onChange={e=>setText(e.target.value)} />
      <button className="btn mt-3" onClick={analisar}>Analisar</button>
      {resp && <div className="mt-4 space-y-2">
        <p>Nota: <b>{resp.score}</b>/100</p>
        <p>Sugestões:</p>
        <pre className="whitespace-pre-wrap">{resp.suggestions}</pre>
        <p>Versão revisada:</p>
        <pre className="whitespace-pre-wrap">{resp.rewrite}</pre>
      </div>}
    </section>
  )
}
