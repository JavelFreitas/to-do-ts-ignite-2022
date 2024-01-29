import { ChangeEvent, InvalidEvent } from "react"
import styles from './styles.module.css'
interface IInputProps {
  getNewTask: (task: string) => void;
  newTask: string;
}

export function Input({ getNewTask, newTask }: IInputProps){
  

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('');
    getNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Este campo é obrigatório');
  }

  return(
      <input
        name="task"
        placeholder='Adicione uma nova tarefa'
        className={styles.task__input}
        value={newTask}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        required
      />
  )
}