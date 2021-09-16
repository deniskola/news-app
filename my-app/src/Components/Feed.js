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

export default function Feed() {
  return (
    <Container className="feed-container">
      <Card className="feed-item">
        <CardActionArea>
          <CardMedia
            className="card-media"
            image="http://futureuniversity.com/wp-content/uploads/sites/9/2015/02/default-placeholder-1024x1024-570x321.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lorem Ipsum
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
