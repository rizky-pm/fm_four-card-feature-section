import React from 'react';
import styled from 'styled-components';

import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';

const AppContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 90px 40px;
`;

function App() {
    return (
        <AppContainer>
            <Header />
            <Cards />
        </AppContainer>
    );
}

export default App;
