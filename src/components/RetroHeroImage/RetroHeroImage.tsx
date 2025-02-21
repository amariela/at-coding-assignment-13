import React from 'react';
import { RetroHeroImageProps } from './RetroHeroImage.types';
import styled from 'styled-components';

const StyledRetroHeroImage = styled.div<{ $disabled: boolean, $backgroundColor: string }>`
    ${props => props.$disabled && 'filter: grayscale(100%);'}
    background-color: ${props => props.$backgroundColor};
    text-align: center;
    padding: 5px 5px;
    box-shadow: 5px 10px black;
`;

const StyledImage = styled.img`
    width: 100%;
    height: auto;
`;

export default function RetroHeroImage(props: RetroHeroImageProps) {
    return (
        <StyledRetroHeroImage $disabled={props.disabled} $backgroundColor={props.backgroundColor}>
            <StyledImage src={props.src} alt={props.alt} id={props.title} />
        </StyledRetroHeroImage>
    );
}
