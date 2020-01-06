import React, { Component } from "react";
// import logo from './logo.svg';
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/Menu.js";
import "./App.css";
import { DISHES } from "./shared/dishes.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={DISHES} />
      </div>
    );
  }
}

export default App;
