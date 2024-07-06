import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';

const EditToDo = ({ todo, onEdit }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [isCompleted, setIsCompleted] = useState(todo.is_completed);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.put(`todos/${todo.id}/`, {
        title,
        description,
        is_completed: isCompleted,
        user: todo.user,
      });
      onEdit(response.data);
    } catch (error) {
      console.error('Error editing the to-do', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit ToDo</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <div>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => setIsCompleted(e.target.checked)}
        />{' '}
        Completed
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditToDo;
