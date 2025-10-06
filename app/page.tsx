import Link from "next/link";

export default function Page() {
  return (
    <main className="grid2">
      <section className="card">
        <h2 className="text-lg mb-2 bg-clip-text text-transparent" style={{backgroundImage:'linear-gradient(90deg,#0ea5e9,#22c55e)'}}>
          Gere textos e descrições com quebra de objeções
        </h2>
        <p className="opacity-80">Títulos com SEO interno, descrições persuasivas e respostas a objeções prontas.</p>
        <div className="mt-3 flex gap-2">
          <Link className="btn" href="/gerar-texto">Gerar Texto</Link>
          <Link className="btn-secondary" href="/simular-objeções">Simular Objeções</Link>
        </div>
      </section>
      <section className="card">
        <h2 className="text-lg mb-2 bg-clip-text text-transparent" style={{backgroundImage:'linear-gradient(90deg,#0ea5e9,#22c55e)'}}>
          Baixe e edite fotos com IA
        </h2>
        <p className="opacity-80">Importe fotos do anúncio, remova fundo, adicione logo Redutron e gere 1200×1200.</p>
        <div className="mt-3 flex gap-2">
          <Link className="btn" href="/baixar-fotos">Baixar Fotos</Link>
          <Link className="btn-secondary" href="/editar-fotos">Editar Fotos</Link>
        </div>
      </section>
      <section className="card">
        <h2 className="text-lg mb-2 bg-clip-text text-transparent" style={{backgroundImage:'linear-gradient(90deg,#0ea5e9,#22c55e)'}}>
          Verifique seu rank nas buscas
        </h2>
        <p className="opacity-80">Descubra em qual página e posição seu anúncio aparece para uma palavra‑chave.</p>
        <div className="mt-3">
          <Link className="btn" href="/rank-anuncio">Checar Rank</Link>
        </div>
      </section>
    </main>
  );
}
