import React from 'react';
import styled from 'styled-components';

import Card from '../Card/Card';

import { specs } from '../../datasets';

const CardsContainer = styled.div`
    margin-top: 50px;
`;

const Cards = () => {
    return (
        <CardsContainer>
            {specs.map((data) => {
                return (
                    <Card
                        key={data.title}
                        title={data.title}
                        desc={data.description}
                        icon={data.icon}
                        color={data.color}
                    />
                );
            })}
        </CardsContainer>
    );
};

export default Cards;
