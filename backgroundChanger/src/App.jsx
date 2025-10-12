import { useState } from "react"


function App() {
  
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
