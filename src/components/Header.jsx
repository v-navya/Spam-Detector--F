export default function Header() {
  return (
    <div style={{marginBottom:16}}>
      <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:6}}>
        <div style={{width:36, height:36, borderRadius:10,
          background:'#FCEBEB', display:'flex',
          alignItems:'center', justifyContent:'center', fontSize:18}}>🛡</div>
        <span style={{fontSize:18, fontWeight:500}}>Spam detector</span>
      </div>
      <p style={{fontSize:13, color:'#888'}}>
        Paste any email or SMS to check if it looks like spam.
      </p>
    </div>
  )
}