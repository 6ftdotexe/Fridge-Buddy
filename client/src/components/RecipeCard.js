import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Pizza from "../components/pizza.jpg";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActionArea,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Paper,
  Grid,
  Button,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

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

function createData(ingredient) {
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
                Search key words from api go here
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <Button
                variant="contained"
                color="primary"

                href="https://linkedin.com/in/williamntrout"

                href="#contained-buttons"

                target="_blank"
                rel="noopener noreferrer"
              >
                Instructions
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.root}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Ingredients:</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.root}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Nutrition:</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
