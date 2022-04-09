import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./Components/Details";
import Home from "./Components/Home";

function App() {
    return (
        <div className="App" data-testid="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details" element={<Details />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
