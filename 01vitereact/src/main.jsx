import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'




const anotheruser="Krishna Khandelwal"
const ReactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'__blank'},
  'click here to visit google',
  anotheruser
)

const anotherElement=(
  <a href="https://google.com" target='__blank'> visit google</a>
)

createRoot(document.getElementById('root')).render(
  
    ReactElement
  
)
