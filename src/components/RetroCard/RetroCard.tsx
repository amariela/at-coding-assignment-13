import React from 'react';
import { RetroCardProps } from './RetroCard.types';
import styled from 'styled-components';

const StyledRetroCard = styled.div<{ $disabled: boolean, $backgroundColor: string }>`
    font-family: monospace;
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    ${props => props.$disabled && 'filter: grayscale(100%);'}
    background-color: ${props => props.$backgroundColor};
`;

const StyledTitle = styled.h2`
    margin: 0 0 8px 0;
`;

const StyledContent = styled.p`
    margin: 0;
`;

export default function RetroCard(props: RetroCardProps) {
    return (
        <StyledRetroCard $disabled={props.disabled} $backgroundColor={props.backgroundColor}>
            <StyledTitle>{props.title}</StyledTitle>
            <StyledContent>{props.content}</StyledContent>
        </StyledRetroCard>
    );
}
