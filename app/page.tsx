
import Link from "next/link";
export default function Page(){
  return (
    <div className="grid2">
      <section className="card">
        <h2 className="text-lg font-semibold mb-1">Gerar Textos com IA</h2>
        <p>Crie títulos e descrições com quebra de objeções e tags.</p>
        <div className="mt-3 flex gap-2">
          <Link className="btn" href="/gerar-texto">Ir ao gerador</Link>
          <Link className="btn-2" href="/simular-objecoes">Objeções</Link>
        </div>
      </section>
      <section className="card">
        <h2 className="text-lg font-semibold mb-1">Fotos e Banners</h2>
        <p>Baixe fotos do anúncio, edite com IA e gere banners 720×160 / 1920×300.</p>
        <div className="mt-3 flex gap-2">
          <Link className="btn" href="/baixar-fotos">Baixar Fotos</Link>
          <Link className="btn-2" href="/editar-fotos">Editor IA</Link>
        </div>
      </section>
      <section className="card">
        <h2 className="text-lg font-semibold mb-1">Rank do anúncio</h2>
        <p>Veja em qual página/posição seu anúncio aparece para uma palavra‑chave.</p>
        <Link className="btn mt-3 inline-block" href="/rank-anuncio">Checar Rank</Link>
      </section>
    </div>
  );
}
