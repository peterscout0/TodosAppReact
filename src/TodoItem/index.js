import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

    // const onComplete = () => {
    //     alert('Ya completaste el Todo ' + props.text);
    // }

    // const onDelete = () => {
    //     alert('Borraste el Todo ' + props.text);
    // }

    return(
        <li className={`TodoItem ${props.completed && 'TodoItem-completed'} `} aria-labelledby="tab-0">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                // onClick={onComplete}
                onClick={props.onComplete}
            >
                👌
            </span>

            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>

            <span  
                className="Icon Icon-delete"
                // onClick={onDelete}
                onClick={props.onDelete}
            >
                🧻
            </span>
        </li>
    );
}

export { TodoItem };