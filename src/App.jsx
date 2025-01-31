import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './expensetracker.css'
import Expensetracker from './Expensetracker'


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Expensetracker/>
        <expensetracker/>
        </div>
    
  )
}

export default App
