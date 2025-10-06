import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "AnuncieIA Studio — Redutron",
  description: "Gere textos, edite fotos com IA e otimize anúncios (sem integrar com ML).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="container">
          <header className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[image:var(--grad)]" style={{ background: 'linear-gradient(90deg,#0ea5e9,#22c55e)' }} />
              <h1 className="text-xl font-semibold">Redutron Studio</h1>
              <span className="badge">AnuncieIA</span>
            </div>
            <nav className="flex gap-3 text-sm">
              <Link href="/">Início</Link>
              <Link href="/gerar-texto">Gerar Texto</Link>
              <Link href="/simular-objeções">Objeções</Link>
              <Link href="/baixar-fotos">Baixar Fotos</Link>
              <Link href="/editar-fotos">Editar Fotos</Link>
              <Link href="/gerar-banners">Banners</Link>
              <Link href="/analisar-descricao">Analisar</Link>
              <Link href="/tags">Tags</Link>
              <Link href="/rank-anuncio">Rank</Link>
            </nav>
          </header>
          {children}
          <footer className="mt-10 opacity-60 text-xs">
            © {new Date().getFullYear()} Redutron — Studio de Anúncios com IA
          </footer>
        </div>
      </body>
    </html>
  );
}
