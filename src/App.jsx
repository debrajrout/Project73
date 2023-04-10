import { useState } from 'react'
import Model from './components/Model'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Model/>
    </div>
  )
}

export default App
