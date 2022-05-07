import './styles.css';
// aqui asemos el llamado de index.js de las class 
import {TodoList, Todo }from './classes'
import { crearTodohtml } from './js/componentes';


//llamar la clase lista para recibir la tarea
export const todolist = new TodoList();

// todolist.todos.forEach(todo => crearTodohtml(todo) );
todolist.todos.forEach(crearTodohtml);