import React from 'react';
import './App.css';

function Todo({ todo,index,completeTodo,removeTodo }) {
  return (
    <div className='todo'
    style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}>
      {todo.text}
      <div>
        <button type='button' onClick={()=> completeTodo(index)}>Complete</button>
        <button type="button" onClick={()=> removeTodo(index)}>X</button>
      </div>
    </div>
  )
}

const TodoForm=({ addTodo })=>{
  const [value,setValue] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("")
  };
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        className='input'
        value={value}
        onChange={e => setValue(e.target.value)}
        />
    </form>
  );
}
function App() {
  const [todos, setTodos] = React.useState([
    { text: "Do laundary",isCompleted: false },
    { text: "Meet friend for lunch",isCompleted: false },
    { text: "Walk the dogs",isCompleted: false },
    { text: "Pick Mara at the airport",isCompleted: false },
    { text: "Call Mummy",isCompleted: false },
    { text: "Play video game",isCompleted: false }

  ]);

  const completeTodo = index =>{
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const addTodo = (text) =>{
    const newTodos =[...todos,{ text }];
    setTodos(newTodos);
  }
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }
  return (
    <div className='app'>
      <div className='todo-list'>
      <h2>My Todo-List</h2>
        {todos.map((todo, index) =>(
          <Todo key={index}
          index ={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
