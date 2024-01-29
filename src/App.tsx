import { FormEvent, useState } from 'react';
import { Header } from './components/Header';
import { Input } from './components/Input';

import styles from './App.module.css';
import { CreateTaskButton } from './components/CreateTaskButton';
import { ITask, Item } from './components/Item';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleGetNewTask(task: string) {
    setNewTask(task);
  }

  function handleCreateNewTask(event: FormEvent) {
    if (!newTask) return;

    const addTask: ITask = {
      isChecked: false,
      content: newTask,
      id: new Date().getTime(),
    }

    setTasks(state => [...state, addTask])
    setNewTask('');
    event.preventDefault();
  }


  function removeTask(id: number) {
    setTasks((state) => {
      return state.filter(task => task.id !== id);
    })
  }

  function toggleChecked(id: number, checked: boolean) {
    const updatedTaskList = tasks.map(task => {
      if (task.id === id) task.isChecked = checked;
      return task;
    })

    setTasks([...updatedTaskList])
  }

  return (
    <>
      <Header />

      <section className={styles.wrapper}>
        <form onSubmit={handleCreateNewTask} className={styles.task__form}>
          <Input getNewTask={handleGetNewTask} newTask={newTask} />
          <CreateTaskButton />
        </form>
        {tasks.map((task) => {
          return <Item
            task={task}
            removeTask={removeTask}
            toggleChecked={toggleChecked}
          />
        })}
      </section>
    </>
  )
}

export default App
