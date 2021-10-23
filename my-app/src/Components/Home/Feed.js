import React from "react";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Container,
} from "@material-ui/core";
import staticData from "../../Data/StaticData";
import {Link} from "react-router-dom";

export default function Feed({categoryFilter, noFilter}) {
  return (
    <Container className="feed-container">
      {staticData
        .filter((item) =>
          noFilter ? true : item.category === `${categoryFilter}`
        )
        .map((item) => (
          <Card className="feed-item">
            <Link
              to={`/${item.id}`}
              style={{textDecoration: "none", color: "black"}}
            >
              <CardActionArea>
                <CardMedia
                  className="card-media"
                  image="http://futureuniversity.com/wp-content/uploads/sites/9/2015/02/default-placeholder-1024x1024-570x321.png"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p"
                  >
                    {item.category}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
            <CardActions>
              <Link to={`/${item.id}`} style={{textDecoration: "none"}}>
                <Button size="small" color="primary">
                  Read More
                </Button>
              </Link>
            </CardActions>
          </Card>
        ))}
    </Container>
  );
}
