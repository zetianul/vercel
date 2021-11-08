import React, { Component } from "react";
import Games from "./Pages/Games";
import Home from "./Pages/Home";
import { Route, Routes, Link } from "react-router-dom"

class App extends Component<any, any>{
    render() {
      return (
        <div>
          <h1>
            hello world
          </h1>
          <Link to="/">home</Link>
          <Link to="/games">games</Link>
          <div>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/games"} element={<Games />} />
            </Routes>
          </div>

        </div>
      )
    }
}

export default App