import styles from './styles.module.css';
import { Check } from '@phosphor-icons/react';
import { DeleteButton } from '../DeleteButton';

export interface ITask {
  id: number
  content: string;
  isChecked: boolean;
}

interface IItemProps{
  task: ITask;
  toggleChecked: (id: number, check: boolean) => void;
  removeTask: (id: number) => void;
}

export function Item(props: IItemProps) {
  const {task, toggleChecked, removeTask} = props;
  const {id, content, isChecked} = task;

  const checkboxClassname = (isChecked
    ? styles['checkbox--checked']
    : styles['checkbox--unchecked'])

  function handleCheckboxClick() {
    toggleChecked(id, !isChecked);
  }

  function handleRemoveTask(){
    removeTask(id);
  }

  return (
    <div className={styles.task__item}>
      <label htmlFor="checkbox" onClick={handleCheckboxClick}>
        <div>
          <input
            type="checkbox"
            readOnly
            className={styles.checkbox}
          />
          <span className={`${styles.checkbox} ${checkboxClassname}`}>
            {isChecked && <Check />}
          </span>
        </div>
        <p className={styles.content__p}>{content} </p>
      </label>
      <div className={styles.delete__div} onClick={handleRemoveTask}>
        <DeleteButton size={24} />
      </div>
    </div>
  );
}