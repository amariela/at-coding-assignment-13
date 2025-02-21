import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import RetroCard from "./RetroCard";
import '@testing-library/jest-dom';

describe("RetroCard component", () => {

    afterEach(cleanup);

    // Test 1: Check that the component is visible
    test("is visible", () => {
        render(<RetroCard title="Card Title" content="Card Content" disabled={false} backgroundColor="lightblue" />);
        const element = screen.getByText(/Card Title/i);
        expect(element).toBeVisible();
    });

    // Test 2: Check that the component is greyed out when disabled
    test("is greyed out when disabled", () => {
        render(<RetroCard title="Card Title" content="Card Content" disabled={true} backgroundColor="lightblue" />);
        const element = screen.getByText(/Card Title/i).closest('div');
        expect(element).toHaveStyle('filter: grayscale(100%);');
    });
});
