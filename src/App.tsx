import { useState } from 'react'
import { Button } from './components/Button';
import { Task } from './components/Task';
import './styles/global.css';

function App() {

  return (
    <>
      <Button children='Create' isDelete={false}/>
      <Button children='' isDelete/>
      <Task>Aqui é uma tarefa</Task>
    </>
  )
}

export default App
