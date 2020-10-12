import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

// jest.mock("./api/fetchShow")

// const mockShowData = 

test("testing to see if episodes are present", async ()=> {
    render(<App/>)

    // mockFetchShow.mockResolvedValueOnce({data: {}})
    const dropDown = await screen.findByText(/Select a season/i)
    
     
    // userEvent.click(dropDown)


})