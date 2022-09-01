import { useSelector, useDispatch } from "react-redux";
import TaskCard from "./TaskCard";
import { clearTasks } from "./taskSlice";

const TimesList = () => {
  const tasks = useSelector(state => state.task.tasks);
  const dispatch = useDispatch();

  return (
    <section className="mt-6">
      <div className="flex justify-between items-center border-b-2 border-slate-400 pb-2">
        <h1 className="font-semibold text-xl">Logged Tasks</h1>
        <button 
          className="border-2 border-transparent rounded text-gray-500 p-1 transition delay-100 duration-500 ease-in-out hover:border-gray-400 hover:scale-110 hover:bg-gray-400 hover:text-white"
          onClick={() => dispatch(clearTasks())}
        >
          Clear
        </button>
      </div>
      {tasks.length === 0
        ? <p className="mt-2 text-gray-700">No tasks logged...</p>
        : <div className="mt-2 grid grid-cols-2 gap-4">
            {tasks.map(task => (
              <TaskCard key={task.id} {...task} />
            ))}
          </div>
      }

    </section>
  )
}

export default TimesList;