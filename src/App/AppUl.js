import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton'; 
import { Modal } from '../Modal'; 
import './App.css';

function AppUI() {

  const { 
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo, 
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

    return (
      <React.Fragment>
      
        <TodoCounter />
        <TodoSearch />
          <TodoList>

            {error && <p className="p">Uhhhs an error occurred. (っ °Д °;)っ</p>}
            {loading && <p className="p">The TODO's are loading ...</p>}
            {(!loading && !searchedTodos.length) && <p className="p">Welcome, create your tasks, ¡let's go! \^o^/</p>}
      
            {searchedTodos.map(todo => (
              <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>

          {!!openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
    
        <CreateTodoButton 
          setOpenModal={setOpenModal}
        />

    </React.Fragment>
    ); 
}

export { AppUI };