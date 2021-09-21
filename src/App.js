import Home from "./component/Home";
// import Navbar from "./component/Navbar";
import Favorit from "./component/Favorit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/favorit' component={Favorit}/>
    </Switch>
    </Router>
    </>
  );
}

export default App;
