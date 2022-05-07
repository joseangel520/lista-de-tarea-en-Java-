import { todolist } from "..";
import { Todo } from "../classes";


// Regerencias en el html
const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulfiltros     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');




export const crearTodohtml = ( todo ) =>{

    const htmlTodo =`
    <li class="${ (todo.completado) ? 'completed':'' }" data-id="${ todo.id }">
      <div class="view">
        <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked':'' }>
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
      </div>
        <input class="edit" value="Create a TodoMVC template">
    </li> `

    //crear el elemnto de html
  const div = document.createElement('div');
  div.innerHTML = htmlTodo;
  divTodoList.append(div.firstElementChild);
  return div.firstElementChild;

}

//  Eventos
txtInput.addEventListener('keyup', (event) =>{ //evento con el enter del teclado (keyup)

if ( event.keyCode===13  && txtInput.value.length > 0){
    console.log(txtInput.value);
    const nuevoTodo = new Todo( txtInput.value);
    // agregamos a la lista
    todolist.nuevoTodo(nuevoTodo);
    // mostrar para verificar si se guarda
    console.log (todolist);
    // agregarlo al html
    crearTodohtml(nuevoTodo);
    txtInput.value = "";}
  });

divTodoList.addEventListener('click', (event)=>{
    const nombreElemto = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId       = todoElemento.getAttribute('data-id');
     // Verificar si completo la tare
    if( nombreElemto.includes('input')){ // click en el check
        todolist.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    }else if ( nombreElemto.includes('button')){ // hay que borrar el todo
        todolist.elimitarTodo( todoId);
        divTodoList.removeChild( todoElemento);
    }
});

btnBorrar.addEventListener('click', () => {

    todolist.eliminarCompletados();

    for(let i = divTodoList.children.length-1; i >= 0; i--){
        const elemento = divTodoList.children[i];
      if(elemento.classList.contains('completed') ){
          divTodoList.removeChild(elemento);
      }

    }

});

ulfiltros.addEventListener('click', () => {

   const filtro = event.target.text;

   if( !filtro ){return;}

   anchorFiltros.forEach(elem =>elem.classList.remove('selected')  );
   event.target.classList.add('selected');


   for( const elemento of divTodoList.children){
       
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

         switch(filtro){
           case 'Pendientes':
                if(completado){
                  elemento.classList.add('hidden');
                }           
                break;
           case 'Completados':
                if( !completado){
                  elemento.classList.add('hidden');
                }
                break;
           }

           

          
   }

});

