import { FormEvent, useState } from 'react';
import { Header } from './components/Header';
import { Input } from './components/Input';

import styles from './App.module.css';
import { CreateTaskButton } from './components/CreateTaskButton';

function App() {
  const [newTask, setNewTask] = useState('');

  function handleGetNewTask(task: string) {
    setNewTask(task);
  }

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault();
  }

  return (
    <>
        <Header/>

        <section className={styles.wrapper}>
          <form onSubmit={handleCreateNewTask} className={styles.task__form}>
            <Input getNewTask={handleGetNewTask} newTask={newTask}/>
            <CreateTaskButton />
          </form>

        </section>
    </>
  )
}

export default App
