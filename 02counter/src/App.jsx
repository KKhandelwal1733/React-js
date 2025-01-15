import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(5)
  

  const removeValue=()=>{
   if(counter>0)
    {counter--
    setCounter(counter)
    console.log(counter,"updated")}
     }

  const addValue=()=>{ 
    counter++
    setCounter(counter)
    console.log(counter,"updated")}
  
  return (
    <>
      <h1> kya haal chinu!</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
} 

export default App
