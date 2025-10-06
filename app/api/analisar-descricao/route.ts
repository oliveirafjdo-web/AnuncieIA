import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { text } = await req.json();
  const t = String(text||'');
  let score = 100;
  const suggestions: string[] = [];
  if (t.length < 200) { score -= 20; suggestions.push('Aumente a riqueza da descrição (mín. 200+ palavras).'); }
  if (!/\n/.test(t)) { score -= 10; suggestions.push('Use quebras de linha e seções para facilitar a leitura.'); }
  if (!/\bgarantia\b/i.test(t)) { score -= 10; suggestions.push('Inclua garantia e política de devolução.'); }
  if (!/\bcompat[ií]vel\b/i.test(t)) { score -= 10; suggestions.push('Liste compatibilidades (Windows, Mac, etc.).'); }

  const rewrite = [
    'Resumo: Produto com foco em estabilidade, desempenho e instalação simples.',
    '',
    'Benefícios:',
    '• Alta velocidade e estabilidade para trabalho e lazer;',
    '• Compatível com Windows e Mac;',
    '• Instalação Plug & Play;',
    '• Suporte Redutron e garantia.',
    '',
    'Especificações:',
    '• Consulte a seção técnica do seu produto.',
    '',
    'Envio & Garantia:',
    '• Postagem rápida;',
    '• Garantia e suporte ágil.'
  ].join('\n');

  return NextResponse.json({ score: Math.max(0, score), suggestions: suggestions.join('\n'), rewrite });
}
