import React from "react";
import { RetroTextProps } from './RetroText.types';
import styled from 'styled-components';

// Declare styled-component
const StyledRetroText = styled.div<{$disabled: boolean, $backgroundColor: string}>`
    font-family: monospace;
    font-size: 1.2em;
    font-weight: bolder;
    background-color: ${props => props.$disabled ? 'gray' : props.$backgroundColor};
    width: fit-content;
`;
    

export default function RetroText(props: RetroTextProps) {
    return (
        <StyledRetroText
            $disabled = {props.disabled}
            $backgroundColor = {props.backgroundColor}
            id = {props.textId}
        >
            {props.label}
        </StyledRetroText>
    )
}