import React from 'react';
import {Search_bar} from './assets/scss/Searchbar.scss';

function Searchbar(props) {
    return (
        <div className={Search_bar}>
            <input type='text' placeholder='찾기'/>
        </div>
    );
}

export default Searchbar;