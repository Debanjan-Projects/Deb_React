import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hoocks/useCurrencyInfo'
import './App.css'





function App() {

  //hoocks apne ap hi ak method hain ,ak varibale hain or ak function hain,

  //ak array liya hain , jisme ak variabe hain , or ak function reference hain.


  //using all sstate , || or declare all state here .

  const [amount, setamount] = useState(0)

  const [from ,setfrom] = useState("usd")

  const [to,setTo] = useState("inr")

  const [convertedAmount, setConvertedAmount] =useState(0)


  //hoocks kaishe used karna hain...

  const CurrencyInfo = useCurrencyInfo(from)


  const options =Object.keys(CurrencyInfo)

//swap functionality.
//swap ak method hain..
const swap = () => {
  const tempAmount = amount;
  const tempConverted = convertedAmount;

  setamount(tempConverted);
  setConvertedAmount(tempAmount);
  setfrom(to);
  setTo(from);

  
};




  //state for the final result ....


 const convert = () =>{
   setConvertedAmount(amount * CurrencyInfo [ to ])
 }







 
 return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'

    style={{backgroundImage: `url(https://images.pexels.com/photos/30945284/pexels-photo-30945284.jpeg)`}}
    >


      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}>


            <div className='w-full mb-1'>
              <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setfrom(currency)}

              //ehh ak problem huya tha .
              onAmountChange={(amount) =>setamount(amount)}
              selectedCurrency={from}
              

              />



            </div>
            <div className='relative w-full h-0.5'>
              <button
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
              onClick={swap}
              >Swap</button>



            </div>
            <div className='w-full mb-1'>
              <InputBox
              label="To"
              currencyOptions={options}
              amount={convertedAmount}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
              amountDisabled
              />

              
            </div>
            <button
            type='submit'
            className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default App
