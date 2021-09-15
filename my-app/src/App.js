import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import {useState} from "react";
import Menu from "./Components/Menu";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && <Menu />}
    </div>
  );
}

export default App;
