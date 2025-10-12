import { useEffect } from 'react'
import { useState ,useCallback,useRef } from 'react'



function App() {

const [length, setLength]  = useState(8)
const[numberAllowed , setNumberAllowed] = useState(false)
const[charAllowed, setCharAllowed] =useState(false)

const [password, setPassword] = useState("")

//useRef ko used karneke liye ap ko ak variable banana padega....ref hoocks ///used ref hoocks...

const passwordRef = useRef(null)




//create a password generator method..
// const passwordGenerator = useCallback(()=>

const passwordGenerator = useCallback(()=> { 
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"


  if(numberAllowed) str += "0123456789"
  if(charAllowed) str += "!@#$%^&*~{}+[]="


  for (let i = 1; i <=length; i++){
    let char =Math.floor( Math.random() * str.length + 1)

    pass += str.charAt(char)
  }

  setPassword(pass)
 
  ;



}, [length,numberAllowed,charAllowed ,setPassword])


const copyPasswordToClipBoard = useCallback(() => {
  passwordRef.current?.select();
  // passwordRef.current?.setSelectionRange(0, 3);


    window.navigator.clipboard.writeText(password)
} , [password])


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
    <input
      type="text"
      value={password}
      className="w-full bg-transparent text-white placeholder-gray-400 px-4 py-2 outline-none"
      placeholder="Password"
      readOnly
      ref={passwordRef}
    />

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
