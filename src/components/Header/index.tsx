import todoLogo from '../../assets/todoLogo.svg'
import styles from './styles.module.css';

export function Header(){
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo do app ToDo List do Ignite React" />
    </header>
  )
}