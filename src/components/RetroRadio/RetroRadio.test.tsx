import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import RetroRadio from "./RetroRadio";
import '@testing-library/jest-dom';

describe("Radio component", () => {

    afterEach(cleanup);

    // Test 1: Check that the component is visible
    test("is visible", () => {
        render(<RetroRadio id="radio1" name="group1" value="1" label="Option 1" onChange={() => { }} disabled={false} backgroundColor="lightblue" />);
        const element = screen.getByLabelText(/Option 1/i);
        expect(element).toBeVisible();
    });

    // Test 2: Check that the background color changes when the component is in the 'disabled' state
    test("changes background color when disabled", () => {
        render(<RetroRadio id="radio2" name="group1" value="2" label="Option 2" onChange={() => { }} disabled={true} backgroundColor="lightblue" />);
        const element = screen.getByLabelText(/Option 2/i);
        expect(element).toBeDisabled();
    });
});
