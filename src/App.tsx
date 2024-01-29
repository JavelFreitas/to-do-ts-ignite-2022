import { FormEvent, useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Input } from './components/Input';

import styles from './App.module.css';
import { CreateTaskButton } from './components/CreateTaskButton';
import { ITask, Item } from './components/Item';
import { EmptyTasks } from './components/EmptyTasks';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [concludedTasks, setConcludedTasks] = useState(0);

  useEffect(() => {
    const concluded = tasks.reduce((acc, cur) => {

      return acc + (cur.isChecked ? 1 : 0);
    }, 0);

    setTasks((state) => state.sort((a,) => {
      return a.isChecked ? 1 : -1
    }));

    setConcludedTasks(concluded);
  }, [tasks])

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

        <div className={styles.progress__div}>
          <p className={styles.tasksCreated__p}>Tarefas criadas <span>{tasks.length}</span></p>
          <p className={styles.tasksConcluded__p}>Concluídas <span>{`${concludedTasks} de ${tasks.length}`}</span></p>
        </div>

        {tasks.length > 0
          ? (tasks.map((task) => {
            return <Item
              key={task.id}
              task={task}
              removeTask={removeTask}
              toggleChecked={toggleChecked}
            />
          }))
          : (<EmptyTasks />)
        }
      </section>
    </>
  )
}

export default App
