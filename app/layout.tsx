export const metadata = { title: "AnuncieIA Studio — Redutron" };
export default function Root({children}:{children:React.ReactNode}){
  return (<html lang="pt-BR"><body style={{fontFamily:'system-ui',padding:24}}>
    <h1>Redutron Studio (build fix)</h1>
    <nav style={{display:'flex',gap:12,marginBottom:16}}>
      <a href="/">Início</a>
    </nav>
    {children}
  </body></html>)
}
