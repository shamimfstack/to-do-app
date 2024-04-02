
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/features/task/taskSlice';

// let nextId = 0;

export default function AddTask() {
  const [title, setTitle] = useState('');
  // const [tasks, setTasks] = useState([]);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    let inputValue = e.target.value;
    setTitle(inputValue);
    inputValue = "";
  }

  

  return (
    <>
      <h1 className='text-4xl'>Add Task</h1>
      <div className='shadow-lg flex flex-col gap-5 w-full md:w-1/2 mx-auto px-12 py-24 my-12 '>
      <input
      className='text-black p-1 rounded-sm mr-2'
        value={title}
        onChange={handleInput}
      />
      <button className='text-lg bg-green-600 text-white py-2 w-1/3 mx-auto' onClick={() => dispatch(addTask(title))}>Add Task</button>
      </div>

      
    </>
  );
}
