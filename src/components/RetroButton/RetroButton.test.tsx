import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import RetroButton from "./RetroButton";
import '@testing-library/jest-dom';

describe("Button component", () => {

    afterEach(cleanup);

    // Test 1: Check that the component is visible
    test("is visible", () => {
        render(<RetroButton label="Click me" buttonId="button1" backgroundColor="lightblue" disabled={false} />);
        const element = screen.getByRole("button", { name: /click me/i });
        expect(element).toBeVisible();
    });

    // Test 2: Check that the background color changes when the component is in the 'disabled' state
    test("changes background color when disabled", () => {
        render(<RetroButton label="Click me" buttonId="button2" backgroundColor="lightblue" disabled={true} />);
        const element = screen.getByRole("button", { name: /Click Me/i });
        expect(element).toHaveStyle("background-color: gray");
    });

    // Test 3: meant to fail to show that pre-commit hook for testing is working
    // test("changes background color when disabled", () => {
    //     render(<RetroButton label="Click me" buttonId="button2" backgroundColor="lightblue" disabled={true} />);
    //     const element = screen.getByRole("button", { name: /Click Me/i });
    //     expect(element).toHaveStyle("background-color: red");
    // });

});
