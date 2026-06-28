import StatGrid from './StatGrid'

export default function ResultCard({ result }) {
  if (!result) return null
  if (result.error) return (
    <div style={{marginTop:14, padding:16, borderRadius:12,
      background:'#FAEEDA', color:'#633806', fontSize:13}}>
      Can't reach Flask — make sure python3 app.py is running.
    </div>
  )

  const isSpam = result.label === 'SPAM'

  return (
    <div style={{marginTop:14, borderRadius:12,
      overflow:'hidden', border:'0.5px solid #eee'}}>
      <div style={{padding:16,
        background: isSpam ? '#FCEBEB' : '#E1F5EE',
        display:'flex', gap:12, alignItems:'center'}}>
        <div style={{width:40, height:40, borderRadius:10,
          background: isSpam ? '#E24B4A' : '#1D9E75',
          display:'flex', alignItems:'center',
          justifyContent:'center', fontSize:18, color:'#fff'}}>
          {isSpam ? '⚠' : '✓'}
        </div>
        <div>
          <div style={{fontSize:16, fontWeight:500,
            color: isSpam ? '#A32D2D' : '#085041'}}>
            {isSpam ? 'Spam detected' : 'Looks safe'}
          </div>
          <div style={{fontSize:12, opacity:.8,
            color: isSpam ? '#A32D2D' : '#085041'}}>
            {isSpam ? 'This message shows signs of spam'
                    : 'This message looks legitimate'}
          </div>
        </div>
      </div>

      <div style={{padding:'12px 16px'}}>
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:6}}>
          <span style={{fontSize:12, color:'#888'}}>Spam probability</span>
          <span style={{fontSize:13, fontWeight:500}}>{result.spam_prob}%</span>
        </div>
        <div style={{height:6, background:'#f0f0f0',
          borderRadius:3, overflow:'hidden'}}>
          <div style={{height:'100%', width:`${result.spam_prob}%`,
            background: isSpam ? '#E24B4A' : '#1D9E75',
            borderRadius:3, transition:'width .5s ease'}}/>
        </div>
        <StatGrid result={result} />
      </div>
    </div>
  )
}