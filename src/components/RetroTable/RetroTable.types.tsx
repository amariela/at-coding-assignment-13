export interface RetroTableProps {
    tableId: string;
    headerData: Array<string>;
    rowData: Array<Array<string | number>>;
    footerData: Array<string | number>;
    disabled: boolean;
    headerBackgroundColor: "lightblue" | "orange" | "pink";
    footerBackgroundColor: "lightblue" | "orange" | "pink";
}