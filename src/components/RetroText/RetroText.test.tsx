import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import RetroText from "./RetroText";
import '@testing-library/jest-dom';

describe("Text component", () => {

    afterEach(cleanup);

    // Test 1: Check that the component is visible
    test("is visible", () => {
        render(<RetroText label="Hello" textId="helloText" backgroundColor="lightblue" disabled={false} />);
        const element = screen.getByText(/Hello/i);
        expect(element).toBeVisible();
    });

    // Test 2: Check that the background color changes when the component is in the 'disabled' state
    test("changes background color when disabled", () => {
        render(<RetroText label="Hello" textId="helloText" backgroundColor="lightblue" disabled={true} />);
        const element = screen.getByText(/Hello/i);
        expect(element).toHaveStyle("background-color: gray");
    });
});
