import { useEffect } from 'react'
import { useState ,useCallback,useRef } from 'react'



//edhar length ko target karneke liye lagega, state,
//using use state,
//true or false ko handle karneke liye lagega , check box ke liye lagega .

//password hum edhar generate karenge , automatic koi bhi api call ho jaye, or anything else ,

function App() {

const [length, setLength]  = useState(8)
const[numberAllowed , setNumberAllowed] = useState(false)
const[charAllowed, setCharAllowed] =useState(false)

const [password, setPassword] = useState("")


//useRef hoocks ...
//useRef ko used karneke liye ap ko ak variable banana padega....ref hoocks ///used ref hoocks...

const passwordRef = useRef(null)






//create a password generator method..
// const passwordGenerator = useCallback(()=>

const passwordGenerator = useCallback(()=> { 
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"


  if(numberAllowed) str += "0123456789" //for number allowed
  if(charAllowed) str += "!@#$%^&*~{}+[]=" //for special character allowed.



  // loop ke basis mein hi length ,or length ke basis pe hi password generate hoga,

  for (let i = 1; i <=length; i++){
    let char =Math.floor( Math.random() * str.length + 1)

    //string mein se char ko uthana padta hain , 
    //process...
    //concatinate   kar lena hain ,
    pass += str.charAt(char)
  }


  //read karaneke liye ,
  setPassword(pass)

  //optimization ke kam ke liye used kara jata hain ,
  //memorization ka bhi concept hain ,
  //momeorized kar neke liye ,
  //memeory mein hi rakho ,chache mein rakho, 
 
  ;



}, [length,numberAllowed,charAllowed ,setPassword])

//use callback and ushka dependency array ke sath , useEffect ke sath kabhi bhi compare nahi karna hain,





//************************* */
//crate a  method to copy the password from the clipboard ,

const copyPasswordToClipBoard = useCallback(() => {
  //select kaeneke liye use karte hain , 
  passwordRef.current?.select();
  // passwordRef.current?.setSelectionRange(0, 3);

//core react mein kam kar raha hain ,ish liye hum log direct likh pa rahe hain , window.

    window.navigator.clipboard.writeText(password)
} , [password])




//using another hoocks, useEffects...

useEffect(() => {
  passwordGenerator()
}, [length,numberAllowed,charAllowed,passwordGenerator])





  return (
    <>

<div
  className="fixed top-20 left-0 right-0 w-screen max-w-md mx-auto shadow-lg rounded-lg px-4 py-6"
  style={{ backgroundColor: '#328fa8' }}
>
  <h1 className="text-white text-center text-xl font-semibold mb-4">
    Password Generator
  </h1>

  <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden shadow-inner">

  //crate input by using react.
    <input
      type="text"
      value={password}
      className="w-full bg-transparent text-white placeholder-gray-400 px-4 py-2 outline-none"
      placeholder="Password"
      readOnly
      ref={passwordRef}
    />


//copy button.
    <button
    onClick={copyPasswordToClipBoard}
      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 transition-colors duration-200"
    >
      Copy
    </button>
  </div>



  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1 '>
      <input
       type='range'
       min={6}
       max={100}
       value={length}
       className='cursor-pointer'
       onChange={(e) => {setLength(e.target.value)}}
       
       />

       <label>Length: {length}</label>

      
    </div>




    <div className='fiex item-center gap-x-1'>
      <input
       type="checkbox"
      defaultChecked={numberAllowed}
      id= "numberInput"
    
      onChange={() => {

        //previous jho bhi value hain , ushko change karna hain ,ushko toggle karna hain ,
          setNumberAllowed((prev) => !prev);
          }}
       
       />

       <lebel htmlFor="numberInput">Numbers</lebel>

    </div>





    <div className='fiex item-center gap-x-1'>
      <input
       type="checkbox"
      defaultChecked={numberAllowed}
      id= "characterInput"
    
      onChange={() => {
          setCharAllowed((prev) => !prev);
          }}
       
       />

       <lebel htmlFor="characterInput">Characters</lebel>

    </div>



  </div>
</div>


    </>
  )
}

export default App
