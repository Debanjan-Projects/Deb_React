import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"



//use all services..
function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")



    //create a login method..
    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                //login ho geya hain to kahi or bhej do ussing navigation.
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
   <div className="flex items-center justify-center w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
  <div
    className={`mx-auto w-full max-w-lg bg-white/10 backdrop-blur-xl rounded-2xl p-10 border border-white/20 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]`}
  >
    <div className="mb-6 flex justify-center">
      <span className="inline-block w-full max-w-[120px] drop-shadow-lg">
        <Logo width="100%" />
      </span>
    </div>

    <h2 className="text-center text-3xl font-extrabold leading-tight text-white tracking-wide">
      Sign in to your account
    </h2>
    <p className="mt-3 text-center text-base text-gray-300">
      Don&apos;t have an account?&nbsp;
      <Link
        to="/signup"
        className="font-semibold text-blue-400 hover:text-blue-300 transition-all duration-300 hover:underline"
      >
        Sign Up
      </Link>
    </p>

    {error && (
      <p className="text-red-500 mt-8 text-center font-medium bg-red-500/10 p-2 rounded-md border border-red-500/20">
        {error}
      </p>
    )}


//foem jabbhi submit hoga , tab bhi handle submit hoga , handle submit ak eveent hain ..

    <form onSubmit={handleSubmit(login)} className="mt-10">
      <div className="space-y-6">
        <Input
          label="Email:"
          placeholder="Enter your email"
          type="email"

          //ishko spread karna jaruri hain kiu ki agar ap koibhi register value , or kaha par bhi used kare to value override ho jayega .

          //or ak hota hain obj ..


          {...register("email", {
            required: true,
            validate: {

                //regex...
//react hoocks , mein apply validation she sab kuch sikh sakta hain , or hum log sikha bhi hain ..

              matchPatern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            },
          })}
        />

//password ...

        <Input
          label="Password:"
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: true,
          })}
        />
        <Button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
        >
          Sign in
        </Button>
      </div>
    </form>
  </div>
</div>

  )
}

export default Login