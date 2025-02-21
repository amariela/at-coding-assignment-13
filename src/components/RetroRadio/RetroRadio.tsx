import React from 'react';
import { RetroRadioProps } from './RetroRadio.types';
import styled from 'styled-components';

// Declare styled-components
const StyledRadioLabel = styled.label<{ $backgroundColor: string }>`
    font-family: monospace;
    font-size: 1em;
    background-color: ${(props) => props.$backgroundColor};
    display: inline-block;
    font-weight: bolder;
    padding: 4px 8px;
    border-radius: 4px;
    margin-right: 10px;
`;

const StyledRadioInput = styled.input<{ $disabled: boolean }>`
    margin-right: 5px;
    ${props => props.$disabled && 'pointer-events: none;'}
`;

export default function RetroRadio(props: RetroRadioProps) {
    return (
        <StyledRadioLabel $backgroundColor={props.backgroundColor}>
            <StyledRadioInput
                type="radio"
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
                $disabled={props.disabled}
            />
            {props.label}
        </StyledRadioLabel>
    );
}
