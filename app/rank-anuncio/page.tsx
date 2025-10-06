'use client';
import { useState } from 'react';

export default function Page() {
  const [keyword, setKeyword] = useState('adaptador wifi dual band usb');
  const [url, setUrl] = useState('https://produto.mercadolivre.com.br/MLB3630612443');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const check = async () => {
    setLoading(true);
    const res = await fetch('/api/rank-anuncio', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ keyword, url }) });
    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <section className="card">
      <h2 className="text-lg mb-3">Rank do Anúncio</h2>
      <label className="label">Palavra‑chave</label>
      <input className="input mb-3" value={keyword} onChange={e=>setKeyword(e.target.value)} />
      <label className="label">Link do seu anúncio</label>
      <input className="input mb-3" value={url} onChange={e=>setUrl(e.target.value)} />
      <button className="btn" onClick={check} disabled={loading}>{loading ? 'Verificando...' : 'Ver posição'}</button>
      {result && (
        <div className="mt-4">
          {result.found ? (
            <div className="space-y-1">
              <p>📄 Página: <b>{result.page}</b></p>
              <p>🔢 Posição na página: <b>{result.position}</b></p>
              <p>🏆 Rank total: <b>{result.rank}</b> de {result.total ?? '—'} resultados</p>
            </div>
          ) : (
            <p className="opacity-80">Não encontrado nas primeiras 10 páginas.</p>
          )}
        </div>
      )}
    </section>
  )
}
