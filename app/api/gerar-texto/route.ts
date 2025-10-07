
import { NextResponse } from "next/server";
export async function POST(req: Request){
  const { produto='', features='', modo='descricao' } = await req.json();
  const feats = String(features).split(/;|,/).map((s:string)=>s.trim()).filter(Boolean);
  const titulo = `${produto} — ${feats.slice(0,2).join(' • ')}`.slice(0, 65);
  const desc = [`🔹 ${produto}`, '', 'Benefícios:', ...feats.map(f=>'• '+f), '', 'Por que escolher?', '• Estabilidade e velocidade superiores;', '• Instalação simples (Plug & Play);', '• Suporte Redutron e garantia.'].join('\n');
  const obj = ['❓ Vai funcionar no meu notebook?','✅ Sim, basta ter porta USB e sistema compatível.','','❓ Precisa de driver?','✅ Plug & Play; se necessário, driver simples.','','❓ Serve para jogos e streaming?','✅ Sim, velocidade e estabilidade ideais.'].join('\n');
  const tecnica = 'Especificações Técnicas\n• Interface: USB 3.0\n• Padrão: Wi‑Fi 5 Dual Band (2.4/5 GHz)\n• Compatibilidade: Windows / macOS';
  const tags = ['wifi 5','dual band','usb 3.0','adaptador wifi','alta velocidade','plug & play','windows','mac'].join(', ');
  const out:any = { tags };
  if(!modo || modo==='titulo') out.titulo = titulo;
  if(!modo || modo==='descricao') out.descricao = desc;
  if(modo==='objeções') out.objeções = obj;
  if(modo==='tecnica') out.descricao = tecnica;
  return NextResponse.json(out);
}
