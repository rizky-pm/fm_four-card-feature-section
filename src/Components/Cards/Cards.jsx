import React from 'react';
import styled from 'styled-components';

import Card from '../Card/Card';

import { specs } from '../../datasets';

const CardsContainer = styled.div`
    margin-top: 3.125rem;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        display: grid;
        position: relative;
        place-items: center;
        grid-template-areas:
            'supervisor teambuilder calculator'
            'supervisor karma calculator';
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        width: 69.375rem;
        height: 33.75rem;
    }
`;

const Cards = () => {
    return (
        <CardsContainer>
            {specs.map((data) => {
                return (
                    <Card
                        gridArea={data.gridArea}
                        key={data.title}
                        title={data.title}
                        desc={data.description}
                        icon={data.icon}
                        color={data.color}
                        top={data.top}
                        animation={data.animation}
                    />
                );
            })}
        </CardsContainer>
    );
};

export default Cards;
