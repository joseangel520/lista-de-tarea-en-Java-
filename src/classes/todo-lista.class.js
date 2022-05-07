// va agrupar toda mi lista de mis tareas 
// Usamos camelCase las classes las empezamos con lestra mayuscula

export class TodoList {

    constructor(){

        this.cargarLocalStorage();

    }

    // Crear una nueva tarea de la lista
    nuevoTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    // marcar la tarea si esta completado
    marcarCompletado(id){
        for (const todo of this.todos){
            if (todo.id === id){
                 todo.completado = !todo.completado;
                 this.guardarLocalStorage();
                 break;
            }
        }
    }

    // elimimar la lista
    elimitarTodo (id){
       this.todos = this.todos.filter( todo => todo.id != id);
       this.guardarLocalStorage();
    }

    eliminarCompletados(){
        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage();
    }

//  guardando el local Storage
    guardarLocalStorage(){
        localStorage.setItem('todo',JSON.stringify(this.todos) );
    }

    cargarLocalStorage(){
          
         this.todos = ( localStorage.getItem('todo'))
                        ?JSON.parse(localStorage.getItem('todo'))
                        :[];

    }

}