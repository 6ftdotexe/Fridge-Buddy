import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div>
        <Search />
      </div>
    </Router>
  );
}

export default App;
