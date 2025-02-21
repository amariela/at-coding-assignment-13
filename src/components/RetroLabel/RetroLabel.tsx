import React from "react";
import { RetroLabelProps } from './RetroLabel.types';
import styled from 'styled-components';

// Declare styled-component
const StyledRetroLabel = styled.label<{$disabled: boolean, $backgroundColor: string}>`
    font-family: monospace;
    font-size: 1.5em;
    font-style: italic;
    padding: 0px 10px;
    font-weight: bolder;
    background-color: ${props => props.$disabled ? 'gray' : props.$backgroundColor}
    `;
    

export default function RetroLabel(props: RetroLabelProps) {
    return (
        <StyledRetroLabel
            $disabled = {props.disabled}
            $backgroundColor = {props.backgroundColor}
            htmlFor = {props.labelFor}
        >
            {props.label}
        </StyledRetroLabel>
    )
}