import React from 'react';
import { RetroImageProps } from './RetroImage.types';
import styled from 'styled-components';

const StyledRetroImage = styled.div<{ $disabled: boolean, $backgroundColor: string }>`
    ${props => props.$disabled && 'filter: grayscale(100%);'}
    background-color: ${props => props.$backgroundColor};
    text-align: center;
    padding: 5px 5px;
    box-shadow: 5px 10px black;
    width: max-content;
`;

const StyledImage = styled.img`
    width: 100%;
    height: auto;
`;

export default function RetroImage(props: RetroImageProps) {
    return (
        <StyledRetroImage $disabled={props.disabled} $backgroundColor={props.backgroundColor}>
            <StyledImage src={props.src} alt={props.alt} />
        </StyledRetroImage>
    );
}
