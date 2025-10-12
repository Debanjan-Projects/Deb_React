//jho bhi hoocks apko chaiye apko bashh inko import karna hain...


import  { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



//const variable ko let karna padega ...

function App() {

 let [counter, setCounter]=  useState(5)

 // let counter  = 5





   // console.log("value added" , Math.random()); 
    // agar value update ho raha hain to counter bhi update ho sakta hain.

  const addvalue = ()=>{
  

   
    // counter = counter +1

  setCounter(counter + 1 )
 

   console.log("clicked ",counter);

  //keya ehh function ishh counter ko access kar sakta hain.
  }

  const removevalue =() =>{
    setCounter(counter-1)
  }
 




  //js mein hum log sikha hain ki kishi ki button mein koi action karana hain to hum log onclick method use karta hain.

  //hardcoded value to normal value.


  return (
    <>
      <h1>Debanjan React</h1>
      <h2>counter value :{counter}</h2>
      

      <button onClick={addvalue}>  


      Add value{counter} </button>
      <br/>
      <button  
      onClick={removevalue}>Remove value{counter} </button>

      <p>footer: {counter}</p>
    </>
  )
}




export default App

//ak variable bohot jaga hi present hain.

//ehh agar js karna padta to tab get element by id ,  getelement by class name ,then innertext change esha hi bohot sare kam karna padta...







//ehh per bablle undar the hood sab jha ke inject kar deg a..

