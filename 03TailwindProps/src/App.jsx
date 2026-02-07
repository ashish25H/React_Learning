import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    name: 'DIYCode',
    type: 'ed'
  }
  return (
    <>
      <h1 className='bg-green-400'>Tailwind test</h1>
      <Card name="Ashish" obj={myObj}/>
      <Card name="My Name" obj={myObj}/>
    </>
  )
}

export default App
