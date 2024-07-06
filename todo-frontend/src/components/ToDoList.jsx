import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig';
import ToDoItem from './ToDoItem';
import AddToDo from './AddToDo';
import EditToDo from './EditToDo';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchToDos();
  }, [filter]);

  const fetchToDos = async () => {
    try {
      let response;
      switch (filter) {
        case 'all':
          response = await axiosInstance.get('todos/');
          break;
        case 'ids':
          response = await axiosInstance.get('todos/ids/');
          break;
        case 'titles':
          response = await axiosInstance.get('todos/');
          break;
        case 'unresolved':
          response = await axiosInstance.get('todos/unresolved/');
          break;
        case 'resolved':
          response = await axiosInstance.get('todos/resolved/');
          break;
        case 'userIds':
          response = await axiosInstance.get(`todos/user/${1}/`); // Reemplaza 1 con el ID de usuario deseado
          break;
        case 'userResolved':
          response = await axiosInstance.get(`todos/user/${1}/resolved/`); // Reemplaza 1 con el ID de usuario deseado
          break;
        case 'userUnresolved':
          response = await axiosInstance.get(`todos/user/${1}/unresolved/`); // Reemplaza 1 con el ID de usuario deseado
          break;
        default:
          response = await axiosInstance.get('todos/');
      }
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching the to-dos', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`todos/${id}/`);
      fetchToDos();
    } catch (error) {
      console.error('Error deleting the to-do', error);
    }
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo);
  };

  const handleSaveEdit = (updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    setEditingTodo(null);
  };

  const handleAdd = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="todo-list">
      <h1>ToDo List</h1>
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="all">Lista de todos los pendientes (solo IDs)</option>
        <option value="titles">Lista de todos los pendientes (IDs y Titles)</option>
        <option value="unresolved">Lista de todos los pendientes sin resolver (ID y Title)</option>
        <option value="resolved">Lista de todos los pendientes resueltos (ID y Title)</option>
        <option value="userIds">Lista de todos los pendientes (IDs y userID)</option>
        <option value="userResolved">Lista de todos los pendientes resueltos (ID y userID)</option>
        <option value="userUnresolved">Lista de todos los pendientes sin resolver (ID y userID)</option>
      </select>
      {editingTodo ? (
        <EditToDo todo={editingTodo} onEdit={handleSaveEdit} />
      ) : (
        <AddToDo onAdd={handleAdd} />
      )}
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} onEdit={handleEdit} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ToDoList;
