import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppName from "./components/AppName"
import AddTodo from './components/AddTodo'
import Todolist1 from './components/Todolist1'
import Todolist2 from './components/Todolist2'
import './App.css'

function App() {
  return <center class="todo-container">
    <AppName></AppName>
    <AddTodo></AddTodo>
    <div className='items-container'>
    <Todolist1></Todolist1>
    <Todolist2></Todolist2>
    </div>
  </center>
}

export default App;
