import { useEffect } from 'react'
import { useState,useCallback,useRef } from 'react'
 

function App() {
  const [length, setLength] = useState(8)
  const [num,setNum]=useState(false)
  const [char,setChar]=useState(false)
  const [pass,setPass]=useState("")
  const passRef=useRef(null)
  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(num) str+="0123456789"
    if(char) str+="!@#$%^&*-_+=[]{}~`"
    for(let i=1;i<=length;i++){
      let c=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(c)

  }
  setPass(pass)},[length,num,char,setPass])

  const copyPassword=useCallback(()=>{
    passRef.current.select()
    
    window.navigator.clipboard.writeText(pass)},[pass])

  
  useEffect(()=>{passwordGenerator()},[length,num,char,passwordGenerator])
  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg
     px-4 py-3 my-8 text-orange-500 bg-gray-700 text-orange-500'>
      <h1 className='text-white text-center my-3'> Password Generator</h1>
      < div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type='text'
      value={pass}
      className='outline-none w-full py-2 px-3'
      placeholder='Password'
      readOnly
      ref={passRef}/>
      <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
     </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" 
        min={6}
        max={100}
        className='cursor-pointer'
        value={length}
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>Length:{length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
         defaultChecked={num}
         id='numberInput'
         onChange={()=>{setNum((prev)=>!prev)}}
        />
        <label htmlFor='numberInput'>Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
         defaultChecked={num}
         id='charInput'
         onChange={()=>{setChar((prev)=>!prev)}}
        />
         <label htmlFor='charInput'>Characters</label>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
