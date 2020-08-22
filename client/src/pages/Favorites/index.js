import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FavoritesContent from "./FavoritesContent";

class Favorites extends Component {
    handleClick(e) {
        e.preventDefault();
        window.open(Favorites);
    }

    render() {
        return (
            <div>
                <NavBar />
                <FavoritesContent />
                <Footer />
            </div>
        );
    }
}

export default Favorites;