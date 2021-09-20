import React from 'react';
import styled, { keyframes } from 'styled-components';

const AnimationIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const HeaderContainer = styled.header`
    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: ${AnimationIn} 2s ease;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        transform: translateY(-3.125rem);
    }
`;

const PrimaryText = styled.p`
    font-size: 1.6875rem;
    font-weight: ${(props) => props.theme.fontweights.extraLight};

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        width: 25rem;
    }
`;

const BoldedPrimaryText = styled.span`
    font-weight: ${(props) => props.theme.fontweights.semiBold};
`;

const SecondaryText = styled.p`
    margin-top: 1.5625rem;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.neutralGrayishBlue};

    @media only screen and (${(props) => props.theme.breakpoints.laptops}) {
        width: 34.375rem;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <PrimaryText>
                Reliable, efficient delivery{' '}
                <BoldedPrimaryText>Powered by Technology</BoldedPrimaryText>
            </PrimaryText>
            <SecondaryText>
                Our Artificial Intelligence powered tools use millions of
                project data points to ensure that your project is successful
            </SecondaryText>
        </HeaderContainer>
    );
};

export default Header;
