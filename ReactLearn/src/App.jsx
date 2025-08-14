import React,{Fragment, useState}from "react"

let counter = 4;
function App() {
  const[todos, setTodos] = useState([{
    id:1,
    title:"Go to school",
    description: "go to school today"
  },
  {
    id:2,
    title:"Today i play game",
    description: "bgmi plays"
  },{
    id:3,
    title:"project ",
    description: "project is necessary for placement"
  }
])
 function updateTodo(){
  /* setTodos([...todos, {
  id:counter++,
  title:Math.random(),
  description: Math.random();
  
  }]) */
  const newTodos = [];
  for(let i = 0 ;i < todos.length;i++) newTodos.push(todos[i]);
  newTodos.push({
    id:counter++,
    title: Math.random(),
    description:Math.random()
  })
  setTodos(newTodos);
 }
 

  return (
    <div>
      <button onClick={updateTodo}>Add a Todo </button>
      {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)} 
      {/* another way of writing this  */}

      {/* {
        todos.map(function(todo){
          return <Todo title ={todo.title} description={todo.description}/>
        })
      } */}
    </div>
  )
}
 function Todo({title, description}){
  return <div>
    <h1>
    {title}

    </h1>
    <h4>
      {description}
    </h4>
  </div>
 }

export default App
