import React from 'react';
import { TodoContext } from '../TodoContext'
import './TodoSearch.css';

function TodoSearch() {
    
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    
    const onChangeValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return [

        <input 
            className="TodoSearch" 
            placeholder="Search tasks"
            value={searchValue} 
            onChange={onChangeValueChange}
        />    
    ];
}

export { TodoSearch };