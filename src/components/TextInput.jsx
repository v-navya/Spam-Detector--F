export default function TextInput({ text, setText, setResult }) {
  return (
    <div style={{border:'0.5px solid #ddd', borderRadius:12,
      overflow:'hidden', marginBottom:12}}>
      <textarea
        rows={5} value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Paste email or SMS text here..."
        style={{width:'100%', border:'none', outline:'none',
          padding:'14px 16px', fontSize:14,
          resize:'none', fontFamily:'inherit'}}
      />
      <div style={{display:'flex', justifyContent:'space-between',
        padding:'8px 12px', borderTop:'0.5px solid #eee'}}>
        <span style={{fontSize:12, color:'#aaa'}}>{text.length} characters</span>
        <button onClick={() => { setText(''); setResult(null) }}
          style={{fontSize:12, color:'#aaa', background:'none',
            border:'none', cursor:'pointer'}}>Clear</button>
      </div>
    </div>
  )
}