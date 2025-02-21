import React from "react";
import { RetroDropdownProps } from './RetroDropdown.types';
import styled from 'styled-components';

// Declare styled-components
const StyledDropdown = styled.select<{ $disabled: boolean }>`
    font-family: monospace;
    font-size: 1em;
    padding: 8px;
    margin: 5px;
    border: 1px solid gray;
    border-radius: 4px;
    background-color: ${(props) => (props.$disabled ? 'gray' : 'white')};
`;

const StyledOption = styled.option`
    font-family: monospace;
`;

const StyledLabel = styled.label<{ $backgroundColor: string }>`
    background-color: ${(props) => props.$backgroundColor || 'transparent'};
    display: inline-block;
    font-weight: bolder;
    padding: 4px 8px;
    border-radius: 4px;
    width: auto;
`;

function RetroDropdown(props: RetroDropdownProps) {
    const { options, selectedOption, onSelect, disabled, dropdownLabel, labelBackgroundColor } = props;

    return (
        <StyledLabel $backgroundColor={labelBackgroundColor}>
            {dropdownLabel}
            <StyledDropdown value={selectedOption} onChange={(e) => onSelect(e.target.value)} disabled={disabled} $disabled={disabled}>
                {options.map((option, index) => (
                    <StyledOption key={index} value={option.value}>
                        {option.label}
                    </StyledOption>
                ))}
            </StyledDropdown>
        </StyledLabel>
    );
}

export default RetroDropdown;