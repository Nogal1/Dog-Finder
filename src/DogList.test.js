import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DogList from "./components/DogList";

const dogs = [
    {name: 'Whiskey', src: 'whiskey.jpg' },
    {name: 'Duke', src: 'duke.jpg' },
    {name: 'Perry', src: 'perry.jpg' }
];

test('renders all dog names', () => {
    const { getByText } = render(
        <BrowserRouter>
            <DogList dogs={dogs} />
        </BrowserRouter>
    );

    expect(getByText("Whiskey")).toBeInTheDocument();
    expect(getByText("Duke")).toBeInTheDocument();
    expect(getByText("Perry")).toBeInTheDocument();
});