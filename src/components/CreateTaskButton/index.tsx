import { PlusCircle } from "@phosphor-icons/react";
import styles from './styles.module.css';

export function CreateTaskButton(){
  return (
    <button
      className={styles.createTaskButton}
      value={'oi'}
    >
      Criar <PlusCircle size={16} weight="bold"/>
    </button>
  )
}