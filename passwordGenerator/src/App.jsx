import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str += "0123456789";
    if(char) str += "!@#$%^&*()-+={}[]~`"

    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char)

    }
    setPassword(pass);

  }, [length, number, char, setPassword])

  useEffect(() => {
    generatePassword()
  }, [length, number, char, generatePassword])

  //useRef hook
  const passwordRef = useRef(null);

  const handleClick = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 29)
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 '> 
      <h1 className='text-white text-center my-3 font-extrabold'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input type="text" 
                value={password}
                className='outline-none w-full py-1 px-3 bg-white'
                placeholder='Password'
                ref={passwordRef}
                readOnly
              />
              <button
                onClick={handleClick} 
                className='ouline-none bg-blue-700 text-white px-3 py-2 shrink-0 cursor-pointer'
              >COPY</button>

          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                <input type="range" 
                  min={6}
                  max={100}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e) => {
                    setLength(e.target.value)
                  }}
                />
                <label htmlFor="">Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
                <input type="checkbox" 
                  defaultChecked={number}
                  id='numberInput'
                  onChange={() => {
                    setNumber((prev) => !prev);
                  }}
                /> 
                <label htmlFor="numberInput">Numbers</label> 
            </div>
            <div className='flex items-center gap-x-1'>
                <input type="checkbox" 
                  defaultChecked={char}
                  id='numberInput'
                  onChange={() => {
                    setChar((prev) => !prev);
                  }}
                /> 
                <label htmlFor="numberInput">Characters</label> 
            </div>
          </div>
      </div>
    </>
  )
}

export default App
