import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { nome, carac, tipo } = await req.json();
  // Mock de IA local (substituir por chamada a provider de IA)
  const caracts = String(carac || '').split(';').map((s)=>s.trim()).filter(Boolean);
  const baseTitulo = `${nome} — ${caracts.slice(0,2).join(' • ')}`.slice(0, 60);

  const descricao = [
    `🔹 ${nome}`,
    ``,
    `Benefícios:`,
    ...caracts.map((c)=>`• ${c}`),
    ``,
    `Por que escolher?`,
    `• Estabilidade e velocidade superiores para sua rotina de trabalho e lazer.`,
    `• Instalação simples: Plug & Play.`,
    `• Suporte Redutron com garantia e atendimento rápido.`,
  ].join('\n');

  const obj = [
    `❓ Vai funcionar no meu notebook?`,
    `✅ Sim. Basta ter porta USB disponível e sistema compatível.`,
    ``,
    `❓ Precisa de driver?`,
    `✅ É plug & play; se necessário, o driver acompanha e é simples de instalar.`,
    ``,
    `❓ Serve para jogos e streaming?`,
    `✅ Sim, a estabilidade e a velocidade são ideais para essas atividades.`,
  ].join('\n');

  const tags = ['usb 3.0','dual band','wifi 5','adaptador','alta velocidade','plug & play','windows','mac'].join(', ');

  const out: any = {};
  if (!tipo || tipo === 'titulo') out.titulo = baseTitulo;
  if (!tipo || tipo === 'descricao') out.descricao = descricao;
  if (!tipo || tipo === 'objeções') out.objeções = obj;
  out.tags = tags;

  return NextResponse.json(out);
}
