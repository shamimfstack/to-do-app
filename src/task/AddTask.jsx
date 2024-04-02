import { Button } from 'bootstrap';
import { useState } from 'react';

let nextId = 0;

export default function List() {
  const [title, setTitle] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    setTasks([
      ...tasks,
      { id: nextId++, title: title, status: "peding" }
    ]);
  }
  

  return (
    <>
      <h1 className='text-4xl'>Add Task:</h1>
      <div className='shadow-lg flex flex-col gap-5 w-full md:w-1/2 mx-auto px-12 py-24 mt-12 '>
      <input
      className='text-black p-1 rounded-sm mr-2'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button className='text-lg bg-green-600 text-white py-2 w-1/3 mx-auto' onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </>
  );
}
