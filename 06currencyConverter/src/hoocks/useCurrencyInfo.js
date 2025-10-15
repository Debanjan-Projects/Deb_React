import { useEffect, useState } from "react";



//create a hoocks //jho return karega ak data.

//lekin keya data return karega ohh bhi hum log edhar dekhege..

//main chata huin jab ish hoocks ko koi used karega ..eya ehh hoocks load hoga tab ehh hoocks call hoim.//api ko call kare.

//to eisha konsha hoocks hain jishko main invock kar sakta huin  ki jab koi component maount or unmount ho raha hoin..

//jabbhi koi component mount hota hain ushka life cycle event trgger hota hain ..to ushke liye hamare pass ak hoocks hota hain ohh hain 

//useeffects hoocks...
//ishko use she hamara automatically fetch ko call ho jayega ..

//useeffect hoocks ko laghta hain do chise ak to hota hain callback or ak hota hain dependency.

//ishko use karne she hum logo ko function ke andar function ko nahi call karna padta hain.

//agar dependency array ,mein koi bhi change ayega to dobara ohh api call karega ...

//fetch she hum log chaning kar sakta hain...


//kuch hoocks optional argument leta hain ,//ak hain call back or ak hain dependency array.
function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {

        //api call.
   fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`)

   //chaning.
//call back.//response convert to json()

//har bar ak object ka access klene ke liye . nahi lena padta hian hum log [] ka use karke bhi lehh sakta hain ,
      .then((res) => res.json())

      .then((res) => setData(res[currency]))
       console.log(data);
       //agar currency change hoota hain , tab currency firshe call kiya jayega .
    }, [currency])

    console.log(data);
    return data
    
}


export default useCurrencyInfo;

//ak functinality design karneke bad pura method eee return kar di...


//eha hum logo ka custom hoocks create karna khatam hota hain ........