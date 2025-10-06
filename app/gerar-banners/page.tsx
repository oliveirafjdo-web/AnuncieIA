'use client';
import { useEffect, useRef, useState } from 'react';

function drawBanner(canvas: HTMLCanvasElement, text: string, w: number, h: number) {
  const ctx = canvas.getContext('2d')!;
  canvas.width = w;
  canvas.height = h;
  // fundo degradê
  const grad = ctx.createLinearGradient(0,0,w,0);
  grad.addColorStop(0,'#0ea5e9');
  grad.addColorStop(1,'#22c55e');
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,w,h);
  // texto
  ctx.fillStyle = 'white';
  ctx.font = `${Math.floor(h*0.35)}px sans-serif`;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ctx.fillText(text, w/2, h/2);
}

export default function Page() {
  const [text, setText] = useState('Wi‑Fi 5 • Alta Velocidade • Plug & Play');
  const c1 = useRef<HTMLCanvasElement|null>(null);
  const c2 = useRef<HTMLCanvasElement|null>(null);

  useEffect(()=>{
    if (c1.current) drawBanner(c1.current, text, 720, 160);
    if (c2.current) drawBanner(c2.current, text, 1920, 300);
  }, [text]);

  const download = (canvas: HTMLCanvasElement, name: string) => {
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = name;
    a.click();
  };

  return (
    <section className="card">
      <h2 className="text-lg mb-3">Gerador de Banners</h2>
      <input className="input mb-3" value={text} onChange={e=>setText(e.target.value)} />
      <div className="grid2">
        <div>
          <h3 className="mb-1">720×160 (mobile)</h3>
          <canvas ref={c1} className="rounded border border-white/10" />
          {c1.current && <button className="btn mt-2" onClick={()=>download(c1.current!, 'banner-720x160.png')}>Baixar PNG</button>}
        </div>
        <div>
          <h3 className="mb-1">1920×300 (desktop)</h3>
          <canvas ref={c2} className="rounded border border-white/10" />
          {c2.current && <button className="btn mt-2" onClick={()=>download(c2.current!, 'banner-1920x300.png')}>Baixar PNG</button>}
        </div>
      </div>
    </section>
  )
}
