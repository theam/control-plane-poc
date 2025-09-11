import { createRoot } from 'react-dom/client'
import React from 'react'
import './app.css'

function App() {
  return (
    <div style={{ padding: 24 }}>
      <h1>React Minimal App</h1>
      <p>Hello, world.</p>
    </div>
  )
}

const root = document.getElementById('root')
createRoot(root).render(<App />)
