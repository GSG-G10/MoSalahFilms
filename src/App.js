import Home from "./component/Home";
// import Navbar from "./component/Navbar";
import Favorit from "./component/Favorit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MoviesProvider  from "./Context/MokaContext";
import './App.css';
function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/'>
      <MoviesProvider>
        <Home/>
    </MoviesProvider> 
      </Route>
      <Route exact path='/favorit'>
      <MoviesProvider>
        <Favorit/>
        </MoviesProvider> 

      </Route>
    </Switch>
    </Router>
     );
}

export default App;
