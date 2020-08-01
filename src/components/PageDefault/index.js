import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    color: var(--white);
    display: flex;
    flex: 1;
    height: 100%;
    width: 100%;
`;

Main.Container = styled.div`
    display: flex;
    flex: 1;

    transition: all .5s;

    @media(min-width: 1500px) {
        margin-left: auto;
        margin-right: auto;
        flex: 0.7;
        border-right: 1px solid var(--grayMedium);
        border-left: 1px solid var(--grayMedium);
    }
`;

function PageDefault({ children }) {
    return (
        <>
            <Menu />
                <Main>
                    <Main.Container>
                        {children}
                    </Main.Container>
                </Main>
            {/* <Footer /> */}
        </>
    );
}

export default PageDefault;