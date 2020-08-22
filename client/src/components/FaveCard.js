import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "500px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  paper: {
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
}));

export default function FaveCard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CardHeader title="Name of dish from api" />
      <Grid container spacing={3}>
        <Grid item md={3}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={pizza}
              title="title from api"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                BRIEF DESCRIPTION FROM api
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Button
                variant="contained"
                color="primary"
                href="#contained-buttons"
              >
                Make Again
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
