import React,{useState , useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')  // fixed typo

    const { setuser } = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setuser({ username, password }) // fixed property name
    }

    return (
        <div>
            <h2>Login</h2>

            <input
                type='text'
                value={username}
                onChange={(e) => setusername(e.target.value)}
                placeholder='username'
            />
            {" "}
            <input
                type='text'
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder='password'
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
