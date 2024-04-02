import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addTask, completeTask, deleteTask } from "../redux/features/task/taskSlice";
import { useEffect, useState } from "react";
import { Button } from "bootstrap";

const TaskList = () => {
  // const [ tasks, setTasks ] = useState([])
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  //   console.log(tasks);

  // useEffect(() => {
  //     // Load todos from localStorage when component mounts
  //     const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  //     setTasks(storedTasks);
  //     // if (storedTasks) {
  //     //   storedTasks.forEach(task => dispatch(addTask(task.title)));
  //     // }
  //   }, [dispatch]);

  return (
    <div>
      {/* showing all tasks */}
      <ul className="list-group w-full md:w-1/2 mx-auto p-4">
        {tasks.map((task, index) => (
          <li
            key={task.id}
            className="text-lg list-group-item flex justify-between items-center border-bottom mb-4"
          >
            {index + 1}.{task.title} 
            <button onClick={() => dispatch(completeTask())} className="ml-auto mr-2 bg-green-600 text-white py-1 px-2 rounded-sm">Mark as Completed</button>
            <FaRegTrashAlt
              className=""
              onClick={() => dispatch(deleteTask())}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
