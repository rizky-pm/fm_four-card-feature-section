import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: white;
    text-align: left;
    width: 310px;
    height: 220px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    -webkit-box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    -moz-box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 5px;
    border-top: 4px solid ${(props) => props.color};
    padding: 30px 25px;
    margin-top: 25px;
`;

const Title = styled.header`
    font-size: 22px;
    font-weight: ${(props) => props.theme.fontweights.semiBold};
`;

const Description = styled.p`
    color: ${(props) => props.theme.colors.neutralGrayishBlue};
`;

const Icon = styled.img`
    align-self: flex-end;
    margin-top: 23px;
    width: 55px;
    height: 55px;
`;

const Card = (props) => {
    return (
        <CardContainer color={props.color}>
            <Title>{props.title}</Title>
            <Description>{props.desc}</Description>
            <Icon src={props.icon} alt='MagnifyingGlass' />
        </CardContainer>
    );
};

export default Card;
