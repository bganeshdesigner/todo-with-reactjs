import React,{useState} from 'react';
import Todolists from './components/Todolists';
import './App.css';


function App() {
  const[task,setTask]=useState("")
  const[todos,setTodos]=useState([])
  const changeHandler = e =>{
    setTask(e.target.value)
 }
 const submitHandler = e =>{
   e.preventDefault()
   const newTodos = [...todos,task]
   setTodos(newTodos);
   setTask("")
   console.log(newTodos)
 }

  return (
    <div>
    <div className='card'>
      <div className='card-heading'>
        <h1 className='h1'> Todo List</h1>
        <div className='card-title'>
          <h3>Todo Form</h3>
          <form onSubmit={submitHandler}>
            {/* <input type='text' placeholder='enter your tasks' /> */}

            <div class="form-group  text">
              <input type="text" class="form-control" value={task} onChange={changeHandler} placeholder="enter your tasks"></input>
            </div>
            <button className='btn btn-primary' type='submit'>Add</button>
          </form>
        </div>
      </div>
    </div>
    <div className='list'>
    <div className='card'>
      <div className='card-tittle'>
        <h1>your tasks</h1>
      </div>
      <Todolists Todolists={todos}  />
    </div>
    </div>
    </div>
    
    
    

    
  );
}

export default App;
