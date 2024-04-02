import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../redux/features/task/taskSlice";
import { useEffect, useState } from "react";

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
      <ul className="list-group w-full md:w-1/2 mx-auto">
        {tasks.map((task) => (
          //   <li className="" key={task.id}>
          //     {task.title} <FaRegTrashAlt className="" onClick={() => dispatch(deleteTask())}/>
          //   </li>
          <li
            key={task.id}
            className="list-group-item flex justify-between border-bottom"
          >
            {task.title}{" "}
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
