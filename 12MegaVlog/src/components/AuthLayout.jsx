import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)



    //kish kish field  mein agar change hooo raha hain , to ohh main check karu eya nnahi karu..


    useEffect(() => {
        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false

        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])



    
  return loader ? <h1>Loading...</h1> : <>{children}</>
}


//ehh ak machanisam hain , kish tara she pages or route ko save kiya jaye ..

//ak container create karte hain ..container ak khali ohh hota hain ,ushkee andar value diaplay karana hain eya nahi karana hain ohh decide karte hain ..

//ehha ak protected conatiner hain ..
