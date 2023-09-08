import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Practice2 from './Component/Practice2'
import Form from './Component/Form'

function App() {

 const reducer=(state,action)=>{
  if(action.inc=="increment"){
    return state+1
  }
  else if(action.inc=="decrement"){
    return state-1
  }

  }
  const[state,dispatch]=useReducer(reducer,0);

  return (
    <div>
      <Form/>
      <Practice2/>
    <button onClick={()=>{dispatch({inc:"increment"})}}>increment</button>
    <div>{state}</div>
    <button onClick={()=>{dispatch({inc:"decrement"})}}>decrement</button>
     
    </div>
  )
}

export default App
