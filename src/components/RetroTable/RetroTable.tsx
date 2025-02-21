import React from "react";
import { RetroTableProps } from './RetroTable.types';
import styled from 'styled-components';

// Declare styled-component
const StyledRetroTable = styled.table`
    font-family: monospace;
    font-size: 1.1em;
    border: 1px solid gray;
`;

const StyledRetroHeader = styled.thead<{ $disabled: boolean, $headerBackgroundColor: string }>`
    font-weight: bolder;
    background-color: ${props => 
        props.$disabled ? 'gray' : 
        props.$headerBackgroundColor};
`;

const StyledRetroRow = styled.tr<{ $disabled: boolean }>`
    ${props => props.$disabled ?
        'background-color: gray' :
        '&:hover { background-color: lightgreen }'};
    border: 1px solid gray;
`;

const StyledRetroHeading = styled.th`
    padding: 4px 10px;
    border: 1px solid gray;
`

const StyledRetroCell = styled.td`
    text-align: center;
    width: auto;
    padding: 4px 10px;
    border: 1px solid gray;
`;

const StyledRetroFooter = styled.tfoot<{ $disabled: boolean, $footerBackgroundColor: string }>`
    background-color: ${props => props.$disabled ? 'gray' : props.$footerBackgroundColor};
    font-weight: bolder;
`;

export default function RetroTable(props: RetroTableProps) {
    return (
        <StyledRetroTable id={props.tableId}>
            <StyledRetroHeader $disabled={props.disabled} $headerBackgroundColor={props.headerBackgroundColor}>
                <StyledRetroRow $disabled={props.disabled}>
                    {props.headerData.map((data, headerIndex) => (
                        <StyledRetroHeading key={headerIndex}>{data}</StyledRetroHeading>
                    ))}
                </StyledRetroRow>
            </StyledRetroHeader>
            <tbody>
                {props.rowData.map((row, rowIndex) => (
                    <StyledRetroRow $disabled={props.disabled} key={rowIndex}>
                        {row.map((data, dataIndex) => (
                            <StyledRetroCell key={dataIndex}>{data}</StyledRetroCell>
                        ))}
                    </StyledRetroRow>
                ))}
            </tbody>
            <StyledRetroFooter $disabled={props.disabled} $footerBackgroundColor={props.footerBackgroundColor}>
                <StyledRetroRow $disabled={props.disabled}>
                    {props.footerData.map((data, footerIndex) => (
                            <StyledRetroCell key={footerIndex}>{data}</StyledRetroCell>
                        ))}
                </StyledRetroRow>
            </StyledRetroFooter>
        </StyledRetroTable>
    )
}