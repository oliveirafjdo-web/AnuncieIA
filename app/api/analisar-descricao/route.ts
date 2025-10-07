
import { NextResponse } from "next/server";
export async function POST(req: Request){
  const { texto='' } = await req.json();
  const len = String(texto).split(/\s+/).filter(Boolean).length;
  let score = 80; const sugestoes:string[] = [];
  if(len < 60){ score -= 10; sugestoes.push('Amplie os benefícios (além de 60 palavras).'); }
  if(!/\b(dual band|usb 3\.0|wi-?fi 5|plug ?& ?play)\b/i.test(texto)){ score -= 10; sugestoes.push('Inclua termos fortes: Wi‑Fi 5, Dual Band, USB 3.0, Plug & Play.'); }
  if(!/\n/.test(texto)){ score -= 5; sugestoes.push('Use quebras de linha para leitura fácil.'); }
  const reescrita = '• Wi‑Fi 5 Dual Band (2.4/5 GHz) para velocidade e estabilidade.\n• USB 3.0 — instalação imediata (Plug & Play).\n• Compatível com Windows e macOS.\n• Ideal para jogos, streaming e videochamadas.\n• Suporte e garantia Redutron.';
  return NextResponse.json({ score: Math.max(0,score), sugestoes, reescrita });
}
