import { useState } from 'react';
import { Header } from './components/Header';
import { Input } from './components/Input';

import styles from './App.module.css';
import { CreateTaskButton } from './components/CreateTaskButton';

function App() {
  const [newTask, setNewTask] = useState('');

  function handleGetNewTask(task: string) {
    setNewTask(task);
  }

  return (
    <>
        <Header/>

        <section className={styles.wrapper}>
          <form className={styles.task__form}>
            <Input getNewTask={handleGetNewTask} newTask={newTask}/>
            <CreateTaskButton />
          </form>

        </section>
    </>
  )
}

export default App
