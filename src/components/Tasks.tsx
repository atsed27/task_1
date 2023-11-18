import { Trash } from 'phosphor-react'

import { useState, useEffect } from 'react'
import { Task } from '../types/Task'

import styles from './Tasks.module.css'

type Props = {
  task: Task;
  onDelete: (taskToDelete: Task) => void;
  onCheckboxChange: (taskId: number, isChecked: boolean) => void;
}

export function Tasks({ task, onDelete, onCheckboxChange }: Props){
  const [isChecked, setIsChecked] = useState(task.concluded)

  function handleDeleteTask() {
    onDelete(task)
  }

  function handleCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const updatedChecked = e.target.checked;
    setIsChecked(updatedChecked);
    onCheckboxChange(task.id, updatedChecked)
  }

  useEffect(() => {
    setIsChecked(task.concluded);
  }, [task.concluded]);

  return (
    <section className={styles.tasks}>
      <div className={styles.container}>
        <input 
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          />
          <label>{task.task}</label>
        <button onClick={handleDeleteTask} className={styles.trashIcon}>
          <Trash size={18} />
        </button>
      </div>
    </section>
  )
}