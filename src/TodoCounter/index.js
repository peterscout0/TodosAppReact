import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    // const { total, completed } = props;
    return (

        <h2 className="TodoCounter">you have finished {completedTodos} of {totalTodos} TODO's</h2>  
        
    );
}

// export default TodoCounter;
export { TodoCounter };