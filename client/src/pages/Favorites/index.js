import React, { Component } from "react";

class Favorites extends Component {
  handleClick(e) {
    e.preventDefault();
    window.open(About);
  }

  render() {
    return (
      <div>
        <Header />
        <AboutContent />
        <Footer />
      </div>
    );
  }
}

export default Favorites;
