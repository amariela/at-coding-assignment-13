import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import RetroLabel from "./RetroLabel";
import '@testing-library/jest-dom';

describe("Label component", () => {

    afterEach(cleanup);

    // Test 1: Check that the component is visible
    test("is visible", () => {
        render(<RetroLabel label="Last Name" labelFor="userLastName" backgroundColor="lightblue" disabled={false} />);
        render(<input type="text" id="userLastName"></input>);
        const element = screen.getByText("Last Name");
        expect(element).toBeVisible();
    });

    // Test 2: Check that the background color changes when the component is in the 'disabled' state
    test("changes background color when disabled", () => {
        render(<RetroLabel label="Last Name" labelFor="userLastName" backgroundColor="lightblue" disabled={true} />);
        render(<input type="text" id="userLastName"></input>);
        const element = screen.getByText("Last Name");
        expect(element).toHaveStyle("background-color: gray");
    });
});
