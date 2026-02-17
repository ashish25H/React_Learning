import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter <= 19) {
      // setCounter(counter + 1);
      setCounter(perCounter => perCounter + 1); 0 + 1
      setCounter(perCounter => perCounter + 1); 1 + 1
      setCounter(perCounter => perCounter + 1); 2 + 1
      setCounter(perCounter => perCounter + 1); 3 + 1
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }    
  }

  return (
    <>
     <h1>Counter Porject</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add value</button>
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
