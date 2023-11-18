import { useState, useEffect } from 'react';

import Header from './components/Header';
import styles from './App.module.css';
import { NewTask } from './components/NewTask';
import { TaskCount } from './components/TaskCount';
import { Tasks } from './components/Tasks';
import { TasksEmpty } from './components/TasksEmpty';
import { Task } from './types/Task';

import './global.css';

export function App() {
  const [task, setTask] = useState<Task[]>([]);

  function saveTasksToLocalStorage(tasks: Task[]) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTask(JSON.parse(storedTasks));
    }
  }, []);

  function handleAddTask(taskName: string) {
    const newTask: Task = {
      id: task.length + 1,
      task: taskName,
      concluded: false,
    };

    const updatedTasks: Task[] = [...task, newTask];
    setTask(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  }

  function handleDeleteTask(taskToDelete: Task) {
    const updatedTasks = task.filter((task) => task.id !== taskToDelete.id);
    setTask(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  }

  function allTasksCount(Tasks: Task[]) {
    return Tasks.length;
  }

  function allTasksCountValue() {
    const tasksCount = allTasksCount(task);

    return tasksCount;
  }

  function handleCheckboxChange(taskId: number, isChecked: boolean) {
    const updatedTasks = task.map((item) => {
      if (item.id === taskId) {
        return { ...item, concluded: isChecked };
      }
      return item;
    });
    setTask(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <NewTask onClick={handleAddTask} />
          <TaskCount
            onTasksCount={allTasksCountValue}
            tasks={task}
            onCheckboxChange={handleCheckboxChange}
          />
          <main>
            {task.length === 0 ? (
              <TasksEmpty />
            ) : (
              task.map((task, index) => (
                <Tasks
                  key={index}
                  task={task}
                  onDelete={handleDeleteTask}
                  onCheckboxChange={handleCheckboxChange}
                />
              ))
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
