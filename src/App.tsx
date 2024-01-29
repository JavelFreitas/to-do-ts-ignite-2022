import { useState } from 'react';
import { Header } from './components/Header';
import { Input } from './components/Input';

import styles from './App.module.css';

function App() {
  const [newTask, setNewTask] = useState('');

  function handleGetNewTask(task: string) {
    setNewTask(task);
  }

  return (
    <>
        <Header/>

        <div className={styles.wrapper}>
          <form>
            <Input getNewTask={handleGetNewTask} newTask={newTask}/>
          </form>

        </div>
    </>
  )
}

export default App
