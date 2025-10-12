import './App.css'
import Profile from './Componenets/Profile'
import UserContextProvider from './context/UserContextProvider'
import Login from './Componenets/Login'


function App() {


  return (
    <UserContextProvider>
     <h1>
      React with Debanjan
     </h1>

     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
