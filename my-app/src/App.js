import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import {useState} from "react";
import Menu from "./Components/Menu";
import Feed from "./Components/Feed";
import {Grid} from "@material-ui/core";
import Categories from "./Components/Categories";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [noFilter, setNoFilter] = useState(true);

  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && <Menu />}
      <Categories
        setCategoryFilter={setCategoryFilter}
        setNoFilter={setNoFilter}
      />

      <Grid container>
        <Grid className="side-grid" item xs="2"></Grid>
        <Grid item xs>
          <Feed categoryFilter={categoryFilter} noFilter={noFilter} />
        </Grid>
        <Grid className="side-grid" item xs="2"></Grid>
      </Grid>
    </div>
  );
}

export default App;
