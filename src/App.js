import { ConfigureStore } from "./redux/configureStore";
import { BrowserRouter } from "react-router-dom";
import React, { Component } from "react";
import { Provider } from "react-redux";
import Main from "./components/Main";
import "./App.css";

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
