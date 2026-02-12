import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [addNum, setAddNum] = useState(false);
  const [addChar, setAddChar] = useState(false);
  const [password, setPassword] = useState('');

  //ref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';

    if (addNum) str += '0123456789';
    if (addChar) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, addNum, addChar, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, addNum, addChar, passwordGenerator])

  return (
    <>
      <div className="flex items-center justify-center text-orange-400">
        <div className='bg-gray-400'>
          <p>Password Genrator</p>
          <div className=''>
            <input type="text" value={password} className='bg-amber-50 text-orange-400' placeholder='Password' readOnly ref={passwordRef} />
            <button onClick={copyPasswordToClipBoard}>copy</button>
          </div>
          <div className='flex'>
            <div>
              <input type="range" min={8} max={100} value={length} onChange={(e) => {setLength(e.target.value)}} className='cursor-pointer' />
              <label className='text-red-500'>Length: {length}</label>
            </div>
            <div>
              <input type="checkbox" checked={addNum} id='numberInput' onChange={()=>{
                setAddNum((prev)=> !prev)
              }} />
              <label>Numbers</label>
            </div>
            <div>
              <input type="checkbox" checked={addChar} id='charInput' onChange={()=>{
                setAddChar((prev)=> !prev)
              }} />
              <label>Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
