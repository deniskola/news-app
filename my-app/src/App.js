import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import {useState} from "react";
import Menu from "./Components/Menu";
import Home from "./Components/Home/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ItemDetails from "./Components/Home/ItemDetails";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {menuOpen && <Menu />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={ItemDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
