"use client";

import { useEffect, useState } from "react";

  const Page = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }; 
    const addToDo = () => {
        setTodos([...todos, {task: inputValue, id:Date.now()}])
      
    }

 
    console.log(todos)
    return(
        <div className="flex">
            <input type="number" className="bg-amber-200"
             placeholder="write a number"
             value={inputValue}
             onChange={(e) => handleInputValue(e)}
               />
        <div className="flex gap-5">
            <button onClick={addToDo} className="text-green-600 border-2 rounded-sm" >Add</button> 
             <button className="text-red-600 border-2 rounded-sm"> Delete</button>
            {todos.map((todo, index) => {
             return (
                <div key={index}>
                    <div>{todo.task}</div>
                </div>
             )
              
            })}
           
        </div>
          
        </div>
    
      
    )
}
export default Page;