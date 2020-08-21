import React, { Component } from "./node_modules/react";

class Favorites extends Component {
  handleClick(e) {
    e.preventDefault();
    window.open(About);
  }

  render() {
    return (
      <div style={bg}>
        <Header />
        <AboutContent />
        <Footer />
      </div>
    );
  }
}

export default Favorites;