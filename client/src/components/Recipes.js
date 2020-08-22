import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  IconButton
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "60px",
    width: "900px",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {

    height: 700,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },

}));
//maping over the recipes 'state'
export default function Recipes(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">
            Most Recent Search here!{" "}
          </ListSubheader>
        </GridListTile>
        {props.recipes && props.recipes.map((recipe) => (
          <GridListTile className="recipe__box-main" key={recipe.recipe.image}>
            <img
              className="recipe__box-img"
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
            />
            <GridListTileBar
              title={recipe.recipe.label}
              subtitle={
                <span>{recipe.recipe.ingredientLines.length} ingredients </span>
              }
              actionIcon={
                <IconButton
                  aria-label={`info about ${recipe.recipe.label}`}
                  className={classes.icon}
                >
                  <Link
                    to={{
                      pathname: `/recipe/${recipe.recipe.label}`,
                      state: { recipe: recipe.recipe.label },
                    }}
                  >
                    {" "}
                    <p>View</p>
                  </Link>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
