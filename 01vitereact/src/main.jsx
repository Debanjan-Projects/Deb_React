import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';


// import { jsx as _jsx}  from "react/jsx-dev-runtime.js" ehh kiya jh a sakta hain ...ehh open sorce hain.


import App from './App.jsx'



//create a function with return.

function MyApp() {
return(
    <div>
        <h1>custom App  || Deb</h1>
    </div>
)
}









//keya edhar or bhi react element add kar sakta huin.

// const reactElement = {
//     type: 'a',
//     props: {//ehh ak object hota hain ..ish ke andar ap jitni chaiye  property  lekh /de sakta hain.
//         href:'https://google.com',
//         target: '_blank'

//     },

//     Children:'click me to visit google'
// }


//ehh syntax hi sahi nahi hain......




//////////////////////////////////////////////////////////////
//second element.

//create a next element.....

//directly return.

// const anotherElement = (
//     <a href=" https://google.com" target='_blank'>Visit the google page</a>
// )












//four variable/

const anotheruser = "chai aur react" 
//jab sara tree injection ho jaye tab varibale injection ata hain.or jho bhi variable hota hain ohh sidha eha per ahh jata hain.

//evaluted expression ke andar ap if else nahi likh sakta hain.








//third element..
const reactElement = React.createElement(
   
   
    //ehh bhi ak object leta hain lekin kish tara she deta hain ehh bhi pre define hokar rakhha hain.

    //React.createElement ehh apne ap hi inject ho jata hain ,or eshe jho inject karta hain , ohh hain babble of react.


    //special syntax hota hain.
    'a',
    {
        href:'https://google.com',target:'_blank' //ehh ak object hota hain.setattribute hota hain lekin ushka nam nahi deta hain humlog.
    },

    'click me to  visit google',
    anotheruser //app eha per aka if else nahi likh pate kiu ki ehh evaluated expression hain.
)











createRoot(document.getElementById('root')).render(
         reactElement
        // <MyApp />

    
        // <reactElement/>
//capital..
        //  <ReactElement/>

        // reactElement()

        // ReactElement()

        //ReactElement

        // anotherElement //ehh srif ak object mein convert hoga.
       
    // <App/>
  
    // MyApp()    //eshe bhi hum log likh sakt ahian // kiuki ehh ak function hain.

    //end of the day react bhi ak js hain...

)












//////////////////////////////////////////////////////////////////////////////

//her react ak bundeler used karta hain . 

//sysntax ko sudharna ...
// //
// const reactElement = {
//     type: 'a',
//     props: {//ehh ak object hota hain ..ish ke andar ap jitni chaiye  property  lekh /de sakta hain.
//         href:'https://google.com',
//         target: '_blank'

//     },  //ehh convert karta hain bundeler..


// ehh sysytemm bhi convert karneke kam bundeler ka hota HTMLHeadingElement.//html wala sysntax jada easy hain.but react ko html wala systax pata nahi hota ishh liye bolta hain jsx.js ke andar html mix hota hain. 




