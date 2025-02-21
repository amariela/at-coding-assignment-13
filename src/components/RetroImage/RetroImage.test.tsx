import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import RetroImage from "./RetroImage";
import '@testing-library/jest-dom';

describe("RetroImage component", () => {

    afterEach(cleanup);

    // Test 1: Check that the component is visible
    test("is visible", () => {
        render(<RetroImage src="https://picsum.photos/200/200" alt="Placeholder Image" disabled={false} backgroundColor="lightblue"/>);
        const element = screen.getByAltText(/Placeholder Image/i);
        expect(element).toBeVisible();
    });

    // Test 2: Check that the component is greyed out when disabled
    test("is greyed out when disabled", () => {
        render(<RetroImage src="https://picsum.photos/200/200" alt="Placeholder Image" disabled={true} backgroundColor="lightblue"/>);
        const element = screen.getByAltText(/Placeholder Image/i).closest('div');
        expect(element).toHaveStyle('filter: grayscale(100%);');
    });
});
