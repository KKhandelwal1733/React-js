import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'

function App() {
  

  return (
    <Provider store={store}>
     <h1>
      Redux Toolkit Project
     </h1>
     <AddTodo></AddTodo>
     <Todos></Todos>
    </Provider>
  )
}

export default App
