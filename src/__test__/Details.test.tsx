import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import Details from "../Components/Details";

test("Should render details component", () => {
    const history = createMemoryHistory();
    history.push("/details", {
        title: "",
        url: "",
        created_at: Date(),
        author: "",
    });

    render(
        <Router history={history}>
            <Details />
        </Router>
    );
    const details = screen.getByTestId("details");
    expect(details).toBeInTheDocument();
});
