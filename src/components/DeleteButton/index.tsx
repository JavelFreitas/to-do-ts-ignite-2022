import { Trash } from "@phosphor-icons/react";
import styles from './styles.module.css';

interface IDeleteButton {
  size: number
}

export function DeleteButton({size}: IDeleteButton) {
  return (
    <button className={styles.delete__button}>
      <Trash size={size} />
    </button>
  );
}