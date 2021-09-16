import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import {useState} from "react";
import Menu from "./Components/Menu";
import Feed from "./Components/Feed";
import {Grid} from "@material-ui/core";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && <Menu />}
      <Grid container>
        <Grid item xs></Grid>
        <Grid item xs="8">
          <Feed />
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
}

export default App;
