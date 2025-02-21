import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import RetroTable from "./RetroTable";

describe("Table component", () => {
    // Test 1: Check that the component is visible
    test("is visible", () => {
        const headerData = ["First Name", "Last Name"];
        const rowData = [
            ["John", "Doe"],
            ["Jane", "Smith"]
        ];
        const footerData = ["2 People", 2];
        render(
            <RetroTable
                tableId="testTable"
                headerData={headerData}
                rowData={rowData}
                footerData={footerData}
                disabled={false}
                headerBackgroundColor="lightblue"
                footerBackgroundColor="lightblue"
            />
        );
        const tableElement = screen.getByRole("table");
        expect(tableElement).toBeVisible();
    });

    // Test 2: Check that the background color of the header changes when the component is in the 'disabled' state
    test("changes header background color when disabled", () => {
        const headerData = ["First Name", "Last Name"];
        const rowData = [
            ["John", "Doe"],
            ["Jane", "Smith"]
        ];
        const footerData = ["2 People", 2];
        render(
            <RetroTable
                tableId="testTable"
                headerData={headerData}
                rowData={rowData}
                footerData={footerData}
                disabled={true}
                headerBackgroundColor="lightblue"
                footerBackgroundColor="lightblue"
            />
        );
        const headerElement = screen.getByText("First Name").closest("thead");
        expect(headerElement).toHaveStyle("background-color: gray");

        const bodyRowElement = screen.getByText("John").closest("tr");
        expect(bodyRowElement).toHaveStyle("background-color: gray");

        const footerElement = screen.getByText("2 People").closest("tfoot");
        expect(footerElement).toHaveStyle("background-color: gray");
    });
});
