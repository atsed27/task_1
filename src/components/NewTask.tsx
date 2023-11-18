import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';

import addTaskLogo from '../assets/addtask-img.svg';

type Props = {
  onClick: (taskName: string) => void;
};

export function NewTask({ onClick }: Props) {
  const [newTask, setNewTask] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    onClick(newTask);
    setNewTask('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('please Enter valid task');
  }

  return (
    <div>
      <form onSubmit={handleCreateNewTask} className="flex justify-center">
        <input
          className=" focus:border-none w-[39.875rem] h-[3.375rem] border-gray-700 rounded-xl bg-yellow-100 p-4"
          placeholder="Enter your task"
          value={newTask}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <footer>
          <button
            className="flex flex-row items-center justify-center w-20 ml-3 text-lg font-bold text-gray-100 border-none rounded-md rounded-lg cursor-pointer h-14 bg-blue-950 sm:flex-col "
            type="submit"
          >
            Add
            <img className="" src={addTaskLogo} alt="dani" />
          </button>
        </footer>
      </form>
    </div>
  );
}
