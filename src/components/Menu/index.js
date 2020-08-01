import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import LogoSource from '../../assets/img/logo.png';

import { Navbar, Logo, Item, Search, Form } from './styles';

function Menu() {

    const [searchState, setSearchState] = useState(false);
    const [search, setSearch] = useState('');

    function handleSearchClick() {
        setSearchState(!searchState);
    }

    function handleChange(event) {
        setSearch(
            event.target.value
        );
    }

    function handleSubmit(values) {
        values.preventDefault();
        if(search) {
            let searchValue = search;
            let route = '/pesquisa/' + searchValue;
            const history = createBrowserHistory();
            history.push(route)
            history.go(0)
        }
    }

    return (
        <Navbar>
            <Navbar.Container>
                <Logo as={Link} to="/">
                    <Logo.Image src={LogoSource} />
                </Logo>
                <Item.Container>
                    <Item>
                        <Item.Button as={Link} to="/">
                            INÍCIO
                        </Item.Button>
                    </Item>
                    <Item>
                        <Item.Button as={Link} to="/listar">
                            ALUNOS
                        </Item.Button>
                    </Item>
                    <Item onClick={handleSearchClick}>
                        <Item.Button>
                            <Item.Button.Search />
                        </Item.Button>
                    </Item>
                </Item.Container>
            </Navbar.Container>
            <Navbar.Container.Search show={searchState}>
                <Form onSubmit={handleSubmit}>
                    <Navbar.Search>
                        <Search.Container>
                                <Search.Input 
                                    placeholder="Pesquise por autor ou nome do projeto" 
                                    value={search}
                                    onChange={handleChange}
                                />
                                <Search.Button.Container.Group type="submit">
                                    <Search.Button  />
                                </Search.Button.Container.Group>
                            <Search.Button.Container  onClick={handleSearchClick}>
                                <Search.Button.Close />
                            </Search.Button.Container>
                        </Search.Container>
                    </Navbar.Search>
                </Form>
            </Navbar.Container.Search>
        </Navbar>
    );
}

export default Menu;