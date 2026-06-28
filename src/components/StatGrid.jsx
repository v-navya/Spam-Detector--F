export default function StatGrid({ result }) {
  const stats = [
    ['Confidence',     result.confidence + '%'],
    ['Classification', result.label],
    ['Spam score',     result.spam_prob + '%'],
    ['Ham score',      result.ham_prob + '%'],
  ]

  return (
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr',
      gap:8, marginTop:12}}>
      {stats.map(([label, value]) => (
        <div key={label} style={{background:'#f8f8f8',
          borderRadius:8, padding:'10px 12px'}}>
          <div style={{fontSize:11, color:'#aaa', marginBottom:3}}>{label}</div>
          <div style={{fontSize:15, fontWeight:500}}>{value}</div>
        </div>
      ))}
    </div>
  )
}