
import AddTask from './AddTask';
import TaskList from './TaskList';

const TaskBoard = () => {

    // const handleAddTask = () => {
    //     console.log("Adding task");
    // }

    return (
        <div className='bg-gray-600 py-24 text-white text-3xl text-center'>
            <AddTask />
            <TaskList />
        </div>
    );
};

export default TaskBoard;