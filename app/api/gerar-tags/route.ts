
import { NextResponse } from "next/server";
export async function POST(req: Request){
  const { titulo='' } = await req.json();
  const base = titulo.toLowerCase().replace(/[®™]/g,' ').split(/\s+|\W+/).filter(Boolean);
  const seed = new Set<string>([...base,'wifi 5','dual band','usb 3.0','adaptador wifi','alta velocidade','plug & play','windows','mac']);
  return NextResponse.json({ tags: Array.from(seed).slice(0,12) });
}
