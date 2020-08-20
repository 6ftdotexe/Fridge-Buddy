import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Pizza from "../components/pizza.jpg";

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
  avatar: {
    backgroundColor: red[500],
  },
}));

function createData(measurement, item, onhand) {
  return {};
}

const rows = [];

export default function RecipeCard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CardHeader title="Name of dish from api" />
      <Grid container spacing={3}>
        <Grid item md={3}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={Pizza}
              title="title from api"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                BRIEF DESCRIPTION FROM api
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <Button
                variant="contained"
                color="primary"
                href="#contained-buttons"
                target="_blank"
                rel="noopener noreferrer"
              >
                Play Video Instructions
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardHeader title="Ingredients:" />
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Qty</TableCell>
                    <TableCell align="left">Ingredient</TableCell>
                    <TableCell align="right">Available</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card className={classes.root}>
            <CardHeader title="Method:" />
            <CardContent>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
