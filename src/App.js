import {NavLink} from "react-router-dom"
import Router from './router/Router'
import {createContext, useState} from 'react'
import './App.css'
export const UserContext = createContext()
function App() {
  const [isLogged, setLog] = useState(false)
  const setAuth=(state)=>{
    setLog(state)
    console.log(isLogged)
  }
  const sendToContext = {
    Log:isLogged,
    setAuth:setAuth
  }
  return (
    <div className="App">
      <UserContext.Provider value={sendToContext}>
        <nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      <Router/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
