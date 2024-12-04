export function markDone(itemId, todos, setTodos){
    setTodos(
      (prevTodos)=>(
        prevTodos.map((item)=>item.id===itemId ? {...item, done: !item.done }: item)
      )
    );
  };
  
export function toggleEdit(itemId, todos, setTodos){
   setTodos(
    (prevTodos)=>(
    prevTodos.map((item)=>item.id===itemId ? {...item, editable: !item.editable }: item)
      )
    );
  };
  
export function updateTitle(itemId, newTitle, todos, setTodos) {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === itemId ? { ...item, title: newTitle } : item
      )
    );
};
  
export function toggleDelete(itemId, todos, setTodos) {
    setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id!==itemId))
};
  
export function addTitle(newTitle, todos, setTodos) {
  
    const newId =(todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 0)  
    setTodos((prevTodos)=>[
      ...prevTodos,
      { id: newId, title: newTitle, editable: false, done:false }
    ]
      )
};