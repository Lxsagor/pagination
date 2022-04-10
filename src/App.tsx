import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Details from "./Components/Details";
import Home from "./Components/Home";

function App() {
    return (
        <div className="App" data-testid="app">
            <BrowserRouter>
                <switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/details" component={Details} />
                </switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
