//jho bhi hoocks apko chaiye apko bashh inko import karna hain...


import  { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



//const variable ko let karna padega ...

//usestate hoocks ,state ko change karneke liye responsible hai ,change ke matllab hain ehh nahi , change ke matlab ehh hain ki propogate karta hain ui ke andar ,dom ke andar ,


//what is hoocks ?/
// Hooks are special functions in React that let you use features like state, lifecycle methods, and context inside functional components — something that was previously only possible in class components.

//what is useState ?
// useState is a React Hook that allows you to add state (data that can change over time) to a functional component.
// Before Hooks, only class components could use state — but now you can do it in functions!



function App() {
  //use state she do varibale milta hain array ke bbase mein .
  //ek variable hain jisme value store hota hain , 
  // dusra variable ek function hota hain jiske jariye hum log value ko update kar sakta hain ,


  

 let [counter, setCounter]=  useState(5)// default value ,5

 //pure web page mein jaha bhi counter value saw ho raha hain , udhar ehh counter value update ho jayeg a,

 // let counter  = 5





   // console.log("value added" , Math.random()); 
    // agar value update ho raha hain to counter bhi update ho sakta hain.

    //craete a function..... for adding value ,

  const addvalue = ()=>{
  

   
    // counter = counter +1

  setCounter(counter + 1 )
 

   console.log("clicked ",counter);

  //keya ehh function ishh counter ko access kar sakta hain.

  //problem hain ui updation main , react react karta hain ,, har varibale update mein ,

  //ui  ke updation  control react karta hain ,
  //for this purpose react give some method for update , known as hoocks , jishke jariya , react value o update kar sakta hain ,


  }


  //for removing value .
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


//babale under the hood sab jagha per jha ke inject kar deg a.
//_jsx 







//ehh per bablle undar the hood sab jha ke inject kar deg a..

