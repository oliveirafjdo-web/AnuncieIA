
import { NextResponse } from "next/server";
export async function POST(req: Request){
  const form = await req.formData();
  const file = form.get('image') as File | null;
  if(!file) return NextResponse.json({ error:'Arquivo não enviado' }, { status:400 });
  const buf = Buffer.from(await file.arrayBuffer());
  const base64 = buf.toString('base64');
  return NextResponse.json({ imageBase64: base64 }); // placeholder
}
