import React from "react";
import LoginButton from "../Authentication/LoginButton";
import LogoutButton from "../Authentication/LogoutButton";
import Profile from "../Authentication/Profile";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "../styles/mainStyles.css";

const NavBar = () => {
    return (
        <div style={{ padding: "0px,0px,0px,0px" }}>
            <AppBar position="static" color="Primary">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        aria-label="menu"
                    ></IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        <LoginButton />
                        <LogoutButton />
                        <Profile />
                    </Typography>
                    <Link to="/">
                        <Button color="inherit">
                            <h3>Home</h3>
                        </Button>
                    </Link>
                    <Link to="/about">
                        <Button color="inherit">
                            <h3>About</h3>
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div >
    )
}
export default NavBar;