import {Divider, Fab, Grid, Typography} from "@material-ui/core";
import {ArrowBack} from "@material-ui/icons";
import React from "react";
import {Link} from "react-router-dom";
import staticData from "../../Data/StaticData";
export default function ItemDetails({match}) {
  const item = staticData.find((item) => item.id === match.params.id);
  return (
    <>
      <Grid container>
        <Grid className="side-grid" item xs="2"></Grid>
        <Grid item xs style={{margin: "50px 50px 50px 50px"}}>
          <div>
            <Link to="/" style={{textDecoration: "none"}}>
              <Fab>
                <ArrowBack sx={{mr: 1}} />
              </Fab>
            </Link>
          </div>
          <h1>{item.title}</h1>
          <Divider />
          <p>{item.content}</p>
          <img src={`${item.image}`} style={{width: "75%"}} />
        </Grid>
        <Grid className="side-grid" item xs="2"></Grid>
      </Grid>
    </>
  );
}
