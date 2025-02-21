import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import RetroHeroImage from "./RetroHeroImage";
import '@testing-library/jest-dom';

describe("RetroHeroImage component", () => {

    afterEach(cleanup);

    // Test 1: Check that the component is visible
    test("is visible", () => {
        render(<RetroHeroImage src="https://picsum.photos/600/200" alt="Placeholder Image" title="Hero Title" disabled={false} backgroundColor="lightblue" />);
        const element = screen.getByAltText(/Placeholder Image/i);
        expect(element).toBeVisible();
    });

    // Test 2: Check that the component is greyed out when disabled
    test("is greyed out when disabled", () => {
        render(<RetroHeroImage src="https://picsum.photos/600/200" alt="Placeholder Image" title="Hero Title" disabled={true} backgroundColor="lightblue" />);
        const element = screen.getByAltText(/Placeholder Image/i).closest('div');
        expect(element).toHaveStyle('filter: grayscale(100%);');
    });
});
