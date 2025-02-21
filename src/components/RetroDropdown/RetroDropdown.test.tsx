import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import RetroDropdown from "./RetroDropdown";
import '@testing-library/jest-dom';

describe("Dropdown component", () => {

    afterEach(cleanup);

    // Test 1: Check that the component is visible
    test("is visible", () => {
        render(<RetroDropdown dropdownLabel="Select an option" options={[{ label: "Option 1", value: "1" }, { label: "Option 2", value: "2" }]} selectedOption="1" onSelect={() => { }} disabled={false} labelBackgroundColor="lightblue" />);
        const element = screen.getByLabelText(/select an option/i);
        expect(element).toBeVisible();
    });

    // Test 2: Check that the dropdown background is gray when the disabled prop is true
    test("is disabled when disabled prop is true", () => {
        render(<RetroDropdown dropdownLabel="Select an option" options={[{ label: "Option 1", value: "1" }, { label: "Option 2", value: "2" }]} selectedOption="1" onSelect={() => { }} disabled={true} labelBackgroundColor="lightblue" />);
        const element = screen.getByLabelText(/select an option/i);
        expect(element).toHaveStyle('background-color: gray');
    });
});