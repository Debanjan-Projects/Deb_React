import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'


//uses all services..

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()



    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black">
  <div
    className={`mx-auto w-full max-w-lg bg-white/10 backdrop-blur-xl rounded-2xl p-10 border border-white/20 shadow-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]`}
  >
    <div className="mb-6 flex justify-center">
      <span className="inline-block w-full max-w-[120px] drop-shadow-lg">
        <Logo width="100%" />
      </span>
    </div>

    <h2 className="text-center text-3xl font-extrabold leading-tight text-white tracking-wide">
      Sign up to create account
    </h2>

    <p className="mt-3 text-center text-base text-gray-300">
      Already have an account?&nbsp;
      <Link
        to="/login"
        className="font-semibold text-indigo-400 hover:text-indigo-300 transition-all duration-300 hover:underline"
      >
        Sign In
      </Link>
    </p>




    {error && (
      <p className="text-red-500 mt-8 text-center font-medium bg-red-500/10 p-2 rounded-md border border-red-500/20">
        {error}
      </p>
    )}

    <form onSubmit={handleSubmit(create)} className="mt-10">
      <div className="space-y-6">

      //input ....
        <Input
          label="Full Name:"
          placeholder="Enter your full name"
          {...register("name", {
            required: true,
          })}
        />


        <Input
          label="Email:"
          placeholder="Enter your email"
          type="email"
          {...register("email", {
            required: true,
            validate: {
              matchPatern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            },
          })}
        />



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
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2.5 rounded-xl shadow-lg hover:shadow-indigo-500/40 transition-all duration-300"
        >
          Create Account
        </Button>
      </div>
    </form>
  </div>
</div>

  )
}

export default Signup