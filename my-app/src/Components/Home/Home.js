import {Grid} from "@material-ui/core";
import React, {useState} from "react";
import Categories from "./Categories";
import Feed from "./Feed";

export default function Home() {
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [noFilter, setNoFilter] = useState(true);
  return (
    <div>
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
