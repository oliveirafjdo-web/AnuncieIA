
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "AnuncieIA Studio — Redutron",
  description: "Textos, imagens e rank para anúncios (sem integração ML)."
};

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="pt-BR">
      <body>
        <header className="bg-redutron-gradient text-white">
          <div className="container py-4 flex flex-col md:flex-row gap-3 justify-between items-center">
            <h1 className="text-xl font-bold">🧠 Redutron Studio</h1>
            <nav className="flex flex-wrap gap-3 text-sm">
              <Link href="/">Início</Link>
              <Link href="/gerar-texto">Gerar Textos</Link>
              <Link href="/simular-objecoes">Objeções</Link>
              <Link href="/baixar-fotos">Baixar Fotos</Link>
              <Link href="/editar-fotos">Editar Fotos</Link>
              <Link href="/gerar-banners">Banners</Link>
              <Link href="/analisar-descricao">Analisar</Link>
              <Link href="/tags">Tags</Link>
              <Link href="/rank-anuncio">Rank</Link>
            </nav>
          </div>
        </header>
        <main className="container py-6">{children}</main>
      </body>
    </html>
  );
}
