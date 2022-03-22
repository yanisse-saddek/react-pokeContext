import {NavLink} from "react-router-dom"
import Router from './router/Router'
function App() {
  return (
    <div>
      <nav>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/login">Login</NavLink>
      </nav>
      <Router/>
    </div>
  );
}

export default App;
