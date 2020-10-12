import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { fetchShow } from "../my/api/fetchShow";


test("testing to see if episodes are present", ()=> {
    render(<App/>)

    // const selectSeason = screen.getByRole("Dropdown")
    const selectSeason = screen.getByTestId("selectSeason")

})