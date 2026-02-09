import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div className='w-full h-screen duration-200 flex justify-center' style={{backgroundColor: color}}>
      <div className='fixed flex justify-center bottom-12'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white p-3 rounded-xl'>
          <Button name='red' myFun={setColor}/>
          <Button name='blue' myFun={setColor}/>
          <Button name='green' myFun={setColor}/>
          <Button name='orange' myFun={setColor}/>
          <Button name='yellow' myFun={setColor}/>
          <Button name='cyan' myFun={setColor}/>
        </div>
      </div>
    </div>
  )
}

export default App
