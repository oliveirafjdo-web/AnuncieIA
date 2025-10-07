
'use client';
import { useEffect,useRef,useState } from 'react';
function draw(c:HTMLCanvasElement,text:string,w:number,h:number){
  const ctx=c.getContext('2d')!; c.width=w; c.height=h;
  const g=ctx.createLinearGradient(0,0,w,0); g.addColorStop(0,'#0ea5e9'); g.addColorStop(1,'#22c55e');
  ctx.fillStyle=g; ctx.fillRect(0,0,w,h);
  ctx.fillStyle='white'; ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.font=`${Math.floor(h*0.35)}px sans-serif`; ctx.fillText(text,w/2,h/2);
}
export default function Page(){
  const [text,setText]=useState('Wi‑Fi 5 • Alta Velocidade • Plug & Play');
  const c1=useRef<HTMLCanvasElement|null>(null); const c2=useRef<HTMLCanvasElement|null>(null);
  useEffect(()=>{ if(c1.current) draw(c1.current,text,720,160); if(c2.current) draw(c2.current,text,1920,300); },[text]);
  const dl=(c:HTMLCanvasElement,name:string)=>{ const a=document.createElement('a'); a.href=c.toDataURL('image/png'); a.download=name; a.click(); };
  return (
    <section className="card">
      <h2 className="text-lg font-semibold mb-3">Gerador de Banners</h2>
      <input className="input mb-3" value={text} onChange={e=>setText(e.target.value)} />
      <div className="grid2">
        <div><h3 className="font-semibold mb-1">720×160</h3><canvas ref={c1} className="rounded border" />{c1.current&&<button className="btn mt-2" onClick={()=>dl(c1.current!,'banner-720x160.png')}>Baixar PNG</button>}</div>
        <div><h3 className="font-semibold mb-1">1920×300</h3><canvas ref={c2} className="rounded border" />{c2.current&&<button className="btn mt-2" onClick={()=>dl(c2.current!,'banner-1920x300.png')}>Baixar PNG</button>}</div>
      </div>
    </section>
  );
}
