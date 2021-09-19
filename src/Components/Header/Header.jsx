import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header``;

const PrimaryText = styled.p`
    font-size: 27px;
    font-weight: ${(props) => props.theme.fontweights.extraLight};
`;

const BoldedPrimaryText = styled.span`
    font-weight: ${(props) => props.theme.fontweights.semiBold};
`;

const SecondaryText = styled.p`
    margin-top: 25px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.neutralGrayishBlue};
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
