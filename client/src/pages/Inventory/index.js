import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import InventoryContent from "./InventoryContent";

class Inventory extends Component {
    handleClick(e) {
        e.preventDefault();
        window.open(Inventory);
    }

    render() {
        return (
            <div>
                <NavBar />
                <InventoryContent />
                <Footer />
            </div>
        );
    }
}

export default Inventory;