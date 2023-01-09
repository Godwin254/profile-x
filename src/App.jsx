import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1>My Portfolio</h1>
     <p>Under construction!</p>
     <div>
        <a href="https://github.com/Godwin254">Visit my GitHub</a>
        <br />
        <a href="https://www.linkedin.com/in/godwin-ochieng/">LinkedIn </a>
     </div>
    </div>
  )
}

export default App
