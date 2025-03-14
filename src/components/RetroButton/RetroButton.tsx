import React from 'react';
import { RetroButtonProps } from './RetroButton.types';
import styled from 'styled-components';

// Declare styled-component 
const StyledRetroButton = styled.button<{ $disabled: boolean, $backgroundColor: string }>`
    font-family: monospace;
    font-size: 1.5em;
    border: 3px solid black;
    padding: 10px 20px;
    box-shadow: 5px 5px black;
    transition: 0.25s;
    font-weight: bolder;
    ${props => props.$disabled ?
        `pointer-events: none;
            background-color: gray;`
        :
        `cursor: pointer;
        background-color: ${props.$backgroundColor};`
    }

    ${props => props.$disabled ? null :
        `&:hover {
            color: white;
        }`
    };

    &:active {
        box-shadow: 0px 0px black;
        transform: translate(5px, 5px);
    }
`;

// Button component with styling args and props
export default function RetroButton(props: RetroButtonProps) {
    return (
        // args starting with $ are interpolations needed for styled-components syntax
        <StyledRetroButton
            $disabled={props.disabled}
            $backgroundColor={props.backgroundColor}
            disabled={props.disabled}
            id={props.buttonId}
        >
            {props.label}
        </StyledRetroButton>
    )
}