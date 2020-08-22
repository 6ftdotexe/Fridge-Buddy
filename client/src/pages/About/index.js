import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import AboutContent from "./AboutContent";

class About extends Component {
    handleClick(e) {
        e.preventDefault();
        window.open(About);
    }

    render() {
        return (
            <div>
                <NavBar />
                <AboutContent />
                <Footer />
            </div>
        );
    }
}

export default About;