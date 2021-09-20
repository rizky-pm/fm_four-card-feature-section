import React from 'react';
import styled, { keyframes } from 'styled-components';

const AnimationIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        transform: translate(0, 0);
        opacity: 1;
    }
`;

const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: white;
    text-align: left;
    width: 19.375rem;
    height: 13.75rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0rem 0.5rem 1.5rem;
    -webkit-box-shadow: rgba(149, 157, 165, 0.2) 0rem 0.5rem 1.5rem;
    -moz-box-shadow: rgba(149, 157, 165, 0.2) 0rem 0.5rem 1.5rem;
    border-radius: 0.3125rem;
    border-top: 0.25rem solid ${(props) => props.color};
    padding: 1.875rem 1.5625rem;
    margin-top: 1.5625rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        grid-area: ${(props) => props.gridArea};
        transform: ${(props) => props.animation};
        animation: ${AnimationIn} 2s ease;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        position: absolute;
        top: ${(props) => props.top};
        width: 21.875rem;
        height: 15.625rem;
        padding: 2.1875rem 1.875rem;
    }
`;

const Title = styled.header`
    font-size: 1.375rem;
    font-weight: ${(props) => props.theme.fontweights.semiBold};
`;

const Description = styled.p`
    color: ${(props) => props.theme.colors.neutralGrayishBlue};
    margin-top: 0.625rem;
`;

const Icon = styled.img`
    align-self: flex-end;
    margin-top: 0.75rem;
    width: 3.4375rem;
    height: 3.4375rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        margin-top: 2rem;
    }
`;

const Card = (props) => {
    console.log(typeof props.animation);
    return (
        <CardContainer
            color={props.color}
            gridArea={props.gridArea}
            top={props.top}
            animation={props.animation}
        >
            <Title>{props.title}</Title>
            <Description>{props.desc}</Description>
            <Icon src={props.icon} alt={props.title} />
        </CardContainer>
    );
};

export default Card;
