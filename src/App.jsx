import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-pink text-blue-800 first-letter:text-yellow">
     Hello
    </div>
  )
}

export default App
