import styles from './TasksEmpty.module.css';

import task from '../assets/task-logo.svg';

export function TasksEmpty() {
  return (
    <div className={styles.tasksEmpty}>
      <img src={task} alt="Task logo" />
      <div>
        <div className={styles.tasksEmptyText}>there is no task add</div>
      </div>
    </div>
  );
}
