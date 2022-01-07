import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(newTodoValue.length <= 0)
        return;
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onKeyUp = (event) => {
        if (event.charCode === 13) {
          event.preventDefault();
          addTodo(newTodoValue);
          onCancel();
        }
      };

    return (
        <form onSubmit={onSubmit} onKeyPress={onKeyUp} className="modal-container open-modal">
            <label>Write your TODO's (ง •_•)ง</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="You can write your homework"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                     type="submit"
                     className="TodoForm-button TodoForm-button--add"
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm };