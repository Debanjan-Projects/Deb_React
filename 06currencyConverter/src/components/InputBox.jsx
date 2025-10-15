import React, {useId} from 'react'


//keya keya lena hain ,
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [], //array mein hi return karo.
    selectedCurrency = "usd", //atlaest ak currency to add raahe , or select rahe ,

    amountDisable = false,
    currencyDisable = false,

    className = "",
}) {

    const amountInputId = useId()


     //user she css nhi lehh raha huin.
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
    
{/* 
//lebel mein biind kar diya user htmlfor.
// input mein bhi rape karna hain. */}

        <div className='w-1-2'>
            <label htmlFor={amountInputId}  className='text-black/40 mb-2 inline-block'>

            {label}

            </label>



            <input 
            id={amountInputId}
            type="number"
            className='outline-none w-full bg-transparent py-1.5'
            placeholder='Amount'
            disabled={amountDisable}
            value={amount}
            // ak checker process.
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
             />




        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        
        <select 
        className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
        value={selectedCurrency}
        onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value)}}
        disabled={currencyDisable}
        >


//field , used in loop.
//jab bhi ap ak loop banayo ki jsx ke anddar , tab ak key and value  pass karna jaruri hain , react ko pata chal jata hain . ki konsha value change huya hain,

            {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>

                {currency}

                </option>
            ))}
        </select>
        </div>
    </div>
  )
}

export default InputBox;