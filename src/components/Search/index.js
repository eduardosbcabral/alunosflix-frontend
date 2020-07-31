import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import SearchInput from '../SearchInput';
import SearchButtonSubmit from './components/SearchButtonSubmit';

function Search() {

    const initialValue = '';
    let history = useHistory()

    const [search, setSearch] = useState(initialValue);

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
        <div className="nav-item">
            <form onSubmit={handleSubmit}>
                <SearchInput 
                    placeholder="Pesquisar"
                    value={search}
                    onChange={handleChange} />
                <SearchButtonSubmit type="submit">
                    <SearchButtonSubmit.Icon />
                </SearchButtonSubmit>
            </form>
        </div>
    );
}

export default Search;