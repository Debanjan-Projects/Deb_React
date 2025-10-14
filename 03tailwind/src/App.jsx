import { useState } from 'react'

import './App.css'

import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "Babai",
    age: 21
  }


  let myArr = [ 1,2,3];





  //tailwind mein jha ke card componenet utha liya hain ,eha card create kara hain ,
  // card ko cut karke ak neya hi component bana le ..


  return (

    //return the fragment.
    <>



      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>







   <Card username = "Debanjan Roy"   sumObj = {myObj} sumArr = {myArr} />   
   <Card  username= "Babai" />


   {/* <Card username = "Debanjan Roy"   btnText = "Click Me"
    sumArr = {myArr} />   
   <Card  username= "Babai" btnText = "visite Me" /> */}



// props pass karna hi srif kam nahi hota hain ,pros ko handel bhi karna hota hain ,





      
    </>
  )
}

export default App
