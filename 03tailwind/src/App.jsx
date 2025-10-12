import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Babai",
    age: 21
  }


  let myArr = [ 1,2,3];




  // card ko cut karke ak neya hi component bana le ..


  return (
    <>



      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>







   <Card username = "Debanjan Roy"   sumObj = {myObj} sumArr = {myArr} />   
   <Card  username= "Babai" />
      
    </>
  )
}

export default App
