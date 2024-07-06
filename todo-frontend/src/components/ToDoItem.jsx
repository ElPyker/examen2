import React from 'react';

const ToDoItem = ({ todo, onEdit, onDelete }) => {
  return (
    <div className="todo-item">
      <h3>{todo.title ? `${todo.id}: ${todo.title}` : `ID: ${todo.id}`}</h3>
      {todo.description && <p>{todo.description}</p>}
      {todo.is_completed !== undefined && (
        <p>{todo.is_completed ? 'Completed' : 'Not Completed'}</p>
      )}
      {todo.created_at && <p>Created at: {todo.created_at}</p>}
      {todo.updated_at && <p>Updated at: {todo.updated_at}</p>}
      {todo.user && <p>User ID: {todo.user}</p>}
      <div className="buttons">
        <button className="edit-btn" onClick={() => onEdit(todo)}>Edit</button>
        <button className="delete-btn" onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default ToDoItem;
