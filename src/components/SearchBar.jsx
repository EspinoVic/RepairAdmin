import React from 'react';
import {ReactComponent as MagnifyingGlass} from '../icons/magnifying_glass.svg'

function SearchBar(props) {
    return (
        <div className="searchbar-container">
            <span className="icon_app">
                {<MagnifyingGlass/>}
            </span>
            <input type="text" className="searchbar" name="searchbar" placeholder="Buscar por orden/teléfono/nombre/PC datos"/>

        </div>
    );
}

export default SearchBar;
