import React from 'react';
import styled, { keyframes } from 'styled-components';

import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';

const AnimationIn = keyframes`
    0% {
        transform: translate(50%, 75%);
        opacity: 0;
    }

    100% {
        transform: translate(50%, 0);
        opacity: 1;
    }
`;

const AppContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 5.625rem 2.5rem;
`;

const Attribution = styled.p`
    position: absolute;
    bottom: 1.25rem;
    width: 60vw;

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        right: 50%;
        transform: translate(50%, 0);
        animation: ${AnimationIn} 2s ease;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
`;

const LinkTag = styled.a`
    color: inherit;
    transition: all ease 0.3s;

    :hover {
        color: ${(props) => props.theme.colors.primaryRed};
        text-decoration: none;
    }
`;

function App() {
    return (
        <AppContainer>
            <Header />
            <Cards />
            <Attribution>
                Challenge by{' '}
                <LinkTag
                    href='https://www.frontendmentor.io?ref=challenge'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Frontend Mentor
                </LinkTag>
                . Coded by{' '}
                <LinkTag href='https://github.com/rizky-pm'>
                    Rizky Putra Mahendra
                </LinkTag>
                .
            </Attribution>
        </AppContainer>
    );
}

export default App;
