import React from 'react'
import { useState } from 'react'
import Form from './Form'
import ShowTask from './ShowTask'

// 1.make a handlesubmit button and connect it to the form button---This is done
// 2.make a delete button to delete the tasks out
// 3.check and uncheck the completed tasks

const App = () => {
  const [todoList , setTodoList] = useState([
    {
      id:1,
      name:"do the groceries"
    }
  ]);
  const [newTaskName , setNewTaskName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTaskName.trim() === '') {
      alert("Enter a valid task");
      return; // do not submit if new task is an empty string
    } 
    const id = todoList.length ? todoList[todoList.length - 1].id+1 : 1 ;
    const newTask = {id , name:newTaskName};
    const allList = [...todoList , newTask];
    setTodoList(allList);
    setNewTaskName('');
  }

  return (
    <div className='App'>
      <Form 
        newTaskName={newTaskName}
        setNewTaskName={setNewTaskName}
        handleSubmit={handleSubmit}
      />
      <h1 style={{textAlign: "left"}}>Task Lists:</h1>
      <ShowTask
        todoList={todoList}
        setTodoList= {setTodoList}
        />
    </div>
  )
}

export default App