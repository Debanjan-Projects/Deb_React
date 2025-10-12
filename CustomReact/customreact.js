

//method design. for custom render..

function customRender (reactElement ,container){
//here e create a dom element.

    // const domElement = document.createElement(reactElement.type) // create element kaha she create karega ... react element ke through karna hain..

    // domElement.innerHTML = reactElement.Children

    //attribute bhi seta karna hain...

    // domElement.setAttribute('href', reactElement.props.href)

    // domElement.setAttribute('target' , reactElement.props.target)

    // container.appendChild(domElement) //container ke andar add karna hain .through appendchild.

        ///////////////////////////////////////////////////////////////////

    //eha ak problem hain agar third arttribute ahh jaye to proble hain agar ak attribute hain to problem hain.


            //////////////////////////////////////////////////

    // second approach using loop.
    

    //ehi hain custom react 
    //react ke andar ak method hota hain jho continuously ehh element ko create karta reheta hain,or element ka tree or graph banta reheta hain.
    //end of the day eshh tara she hi inject kara jata hain,

    
    //for in loop.

const domElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.Children
for (const prop in reactElement.props) {
    if(prop === 'Children') continue;
    domElement.setAttribute(prop, reactElement.props[prop])
        
    }
    container.appendChild(domElement)
}



// jho HTMLUListElementm function mein return kara hain .ohh react ko kaishe dekhta hain. react ushe compile karneke bad kaishe dekhta hain...


const reactElement = {
    type: 'a',
    props: {//ehh ak object hota hain ..ish ke andar ap jitni chaiye  property  lekh /de sakta hain.
        href:'https://google.com',
        target: '_blank'

    },

    Children:'click me to visit google'
}











const mainconatainer = document.getElementById("root") // root ko grab kar raha hain.

//query selector mein class or id ka sysbol diya jata hain lekin getelementbyid mein nahi diya jata hain srif name hi mark kara jata hain.




// end of the ehh sab kuch milt ahian react ke through..
// hum chata huin akk element ho eya fir ak method ho jho method ishko rendar kar de..
// render kaishe kare ,ishh elemene ko add karde root ke andar.


//ab ishko render karna hain.
//render// add kar de root ke andar..
customRender(reactElement , mainconatainer) //keya add karu or kaha per add karu .

