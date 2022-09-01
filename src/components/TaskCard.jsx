const TaskCard = ({ name, secondsElapsed }) => {
  return (
    <div className="border-transparent rounded bg-stone-100 shadow-lg shadow-stone-300 p-4">
      <span className="font-semibold text-indigo-600">Task: </span>
      <span>{name}</span>
      <br />
      <span className="font-semibold text-rose-700">Time: </span>
      <span>{secondsElapsed} second(s)</span>
    </div>
  )
};

export default TaskCard;