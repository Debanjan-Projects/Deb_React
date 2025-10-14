import { useState } from "react"


function App() {
 // here we need to store the color in a variable,
 //or srif variable nahi color ui mein bhi jha raha hain its means hum logo ko chaye ak state .


 //using usestate hoocks .
  const [color,setcolor] = useState("#36a2c6")

  return (

    <div className="w-screen h-screen duration-200 " style={{ backgroundColor: color }}
    >

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">

     <div
         className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-xl"
         style={{ backgroundColor: "#c1eaec" }}>

        <div className="flex flex-wrap justify-center gap-4 p-4">
  <button
    onClick={() => setcolor("red")}
    className="w-24 h-10 text-sm font-medium outline-none rounded-lg text-white shadow-lg transition-transform duration-300 hover:scale-110"
    style={{ backgroundColor: "red" }}
  >
    Red
  </button>

  <button
   onClick={() => setcolor("green")}
    className="w-24 h-10 text-sm font-medium outline-none rounded-lg text-white shadow-lg transition-transform duration-300 hover:scale-110"
    style={{ backgroundColor: "green" }}
  >
    Green
  </button>

  <button
   onClick={() => setcolor("blue")}
    className="w-24 h-10 text-sm font-medium outline-none rounded-lg text-white shadow-lg transition-transform duration-300 hover:scale-110"
    style={{ backgroundColor: "blue" }}
  >
    Blue
  </button>

  <button
   onClick={() => setcolor("yellow")}
    className="w-24 h-10 text-sm font-medium outline-none rounded-lg text-black shadow-lg transition-transform duration-300 hover:scale-110"
    style={{ backgroundColor: "yellow" }}
  >
    Yellow
  </button>

  <button
   onClick={() => setcolor("orange")}
    className="w-24 h-10 text-sm font-medium outline-none rounded-lg text-white shadow-lg transition-transform duration-300 hover:scale-110"
    style={{ backgroundColor: "orange" }}
  >
    Orange
  </button>
</div>

      
      </div>

    
    </div>




  </div>
    
  )
}

export default App


//actually onclick ak unique and aglag hi method hain ,onclick , expect karta hain ,ki ap ushko ak function dogee , but edhar hug log deh raha hain reference of the function , lekin parameter pass nahi kar payoge ,agar directly pass kar diya , tab function jho return karega ohh milta hain , ohh onclick ko  need nahi hain ,onclick ko to function chaiye ,
