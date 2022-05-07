// este arcicho index.js me ayuda a exportar los demas archivos de la carpeta classes 
// para que en el lugar de que lo importemos asi tengamos un unico lugar centralizado 


import { TodoList } from './todo-lista.class';
import { Todo } from './todo.class.';

export {
    TodoList,
    Todo
}