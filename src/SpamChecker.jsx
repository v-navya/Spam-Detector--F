import { useState } from 'react'
import axios from 'axios'

const API = 'http://127.0.0.1:5000'

export default function SpamChecker() {
  const [text, setText]     = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError]   = useState('')

  const handleCheck = async () => {
    if (!text.trim()) { setError('Please enter some text'); return }
    setLoading(true); setError(''); setResult(null)
    try {
      const res = await axios.post(`${API}/predict`, { text })
      setResult(res.data)
    } catch { setError('Server error. Is Flask running?') }
    finally { setLoading(false) }
  } 
  const isSpam = result?.label === 'SPAM'

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', padding: '0 1rem' }}>
      <h1 style={{ fontSize: 22, fontWeight: 500, marginBottom: 4 }}>
        Spam Detector
      </h1>
      <p style={{ color: '#888', fontSize: 14, marginBottom: 16 }}>
        Paste any email or SMS text to check if it's spam.
      </p>

      <textarea
        rows={6} value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Paste email text here..."
        style={{ width: '100%', marginBottom: 10, resize: 'vertical' }}
      />

      <button onClick={handleCheck} disabled={loading}
        style={{ width: '100%', padding: '10px' }}>
        {loading ? 'Checking...' : 'Check for Spam'}
      </button>
      {error && <p style={{ color: 'red', marginTop: 8, fontSize: 13 }}>{error}</p>}

      {result && (
        <div style={{
          marginTop: 16, padding: 16, borderRadius: 8,
          border: `2px solid ${isSpam ? '#E24B4A' : '#1D9E75'}`,
          background: isSpam ? '#FCEBEB' : '#E1F5EE'
        }}>
          <p style={{ fontSize: 20, fontWeight: 500,
            color: isSpam ? '#A32D2D' : '#085041', margin: '0 0 8px' }}>
            {isSpam ? '⚠ SPAM' : '✓ NOT SPAM'}
          </p>
          <p style={{ fontSize: 13, margin: '0 0 8px',
            color: isSpam ? '#A32D2D' : '#085041' }}>
            Confidence: {result.confidence}%
          </p>
          <div style={{ background: '#fff', borderRadius: 4, height: 6, overflow: 'hidden' }}>
            <div style={{
              width: `${result.spam_prob}%`, height: '100%',
              background: isSpam ? '#E24B4A' : '#1D9E75',
              transition: 'width 0.4s ease'
            }}/>
            </div>
          <p style={{ fontSize: 12, color: '#888', marginTop: 6 }}>
            Spam probability: {result.spam_prob}% · Ham: {result.ham_prob}%
          </p>
        </div>
      )}
    </div>
  )
}
