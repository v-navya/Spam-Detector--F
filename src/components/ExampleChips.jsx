const examples = [
  'Congratulations! You won a FREE iPhone. Click now!',
  'Hey, are we still meeting tomorrow at 5?',
  'URGENT: Your account is suspended. Verify now.'
]

export default function ExampleChips({ setText, setResult }) {
  return (
    <div style={{marginTop:16}}>
      <div style={{fontSize:11, color:'#aaa',
        textTransform:'uppercase', letterSpacing:'.05em', marginBottom:8}}>
        Try an example
      </div>
      <div style={{display:'flex', flexWrap:'wrap', gap:6}}>
        {examples.map(ex => (
          <button key={ex}
            onClick={() => { setText(ex); setResult(null) }}
            style={{fontSize:12, padding:'5px 10px', borderRadius:8,
              border:'0.5px solid #ddd', background:'#fff',
              cursor:'pointer', color:'#555'}}>
            {ex.slice(0, 30)}...
          </button>
        ))}
      </div>
    </div>
  )
}