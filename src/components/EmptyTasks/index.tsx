import { ClipboardText } from '@phosphor-icons/react'
import styles from './styles.module.css'

export function EmptyTasks() {
  return (
    <div className={styles.emptyTasks__div}>
      <ClipboardText size={56} className={styles.clipboard}/>
      <p>Você ainda não tem tarefas cadastradas</p>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}