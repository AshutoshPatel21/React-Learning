import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  // let myObj={
  //   userName:'ashu'
  // }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
      
      <Card userName='ashu' bttnText="click Me" />
      {/* <Card userName="Patel" bttnText="Tap me"/> */}
      <Card userName="Patel" />

    </>
  )
}

export default App
