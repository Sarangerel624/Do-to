"use client";

import { useEffect, useState } from "react";

  const Page = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }; 
    const addToDo = () => {
        if(inputValue === "") return;
        setTodos([...todos, {task: inputValue, id:Date.now()}])
        setInputValue("");
    }

    const deleteTodo = (todoId) => {
        const newTodo = todos.filter((todo) => todo.id !== todoId);
    }
    console.log(todos)  
    return(
       <div>
            <div >
            <input type="text" className="bg-amber-200"
             placeholder="write a tasks"
             value={inputValue}
             onChange={(e) => handleInputValue(e)}
            />
            <button  onClick={addToDo}className="text-green-600 border-2 rounded-sm" >Add</button> 
           </div>
                  
            
            {todos.map((todo, index) => {
                return (
                  <div key={index} className="flex">
                     <div>{todo.task}</div>
                     <button onClick={() => deleteTodo(todo.id)}> Delete</button>
                  </div>  ) })}
           
             <div>
          
        </div>
       </div>
      
    )
}
export default Page;