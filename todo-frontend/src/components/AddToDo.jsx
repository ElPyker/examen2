import React, { useState } from 'react';
import axiosInstance from '../axiosConfig';

const AddToDo = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('todos/', {
        title,
        description,
        is_completed: false,
        user: 1,
      });
      onAdd(response.data);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error adding the to-do', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add ToDo</h2>
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
      <button type="submit">Add</button>
    </form>
  );
};

export default AddToDo;
