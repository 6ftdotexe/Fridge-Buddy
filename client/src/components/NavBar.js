import React from "react";
import { makeStyles, Typography, Box, Container, Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        React & Material UI 
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default NavBar;