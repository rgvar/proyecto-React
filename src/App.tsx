import { useState } from 'react'
import './App.css'
import { Button } from './components'


function App() {
    const [count, setCount] = useState(0)

    const CountOne = () => {
        setCount((count) => count + 1);
    }

  return (
    <>
        <Button label={`Count is ${count}`} parentMethod={CountOne} />
    </>
  )
}

export default App
