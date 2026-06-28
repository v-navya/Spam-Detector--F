import { useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import TextInput from './components/TextInput'
import ExampleChips from './components/ExampleChips'
import ResultCard from './components/ResultCard'

const API = 'https://spam-detector-1-4u90.onrender.com/'

export default function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const check = async () => {
    if (!text.trim()) return
    setLoading(true); setResult(null)
    try {
      const res = await axios.post(`${API}/predict`, { text })
      setResult(res.data)
    } catch { setResult({ error: true }) }
    setLoading(false)
  }

  return (
    <div style={{maxWidth:560, margin:'2rem auto', padding:'0 1rem'}}>
      <Header />
      <TextInput text={text} setText={setText} setResult={setResult} />
      <button onClick={check} disabled={loading || !text.trim()}>
        {loading ? 'Checking...' : 'Check for spam'}
      </button>
      <ResultCard result={result} />
      <ExampleChips setText={setText} setResult={setResult} />
    </div>
  )
}