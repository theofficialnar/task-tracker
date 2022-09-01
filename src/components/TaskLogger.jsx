import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "./taskSlice";

const TaskLogger = () => {
  const [taskName, setTaskName] = useState("");
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [isValidTaskName, setIsValidTaskName] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    let timerId;

    if (isTimerStarted) {
      timerId = setInterval(() => {
        setSecondsElapsed(prevValue => prevValue + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    }
  }, [isTimerStarted]);

  /**
   * Starts, pauses and stops the timer.
   * @param {string} action Type of action to be performed.
   */
  const modifyTimerBehavior = action => {
    if (action === "start") {
      isTimerStarted ? setIsTimerStarted(false) : setIsTimerStarted(true);
    }

    if (action === "stop") {
      if (taskName.trim() === "") {
        setIsValidTaskName(false);
        return;
      };

      if (secondsElapsed <= 0) {
        return;
      };

      dispatch(
        addTask({
          name: taskName.trim(),
          secondsElapsed,
        })
      );
      setIsTimerStarted(false);
      setSecondsElapsed(0);
      setTaskName("");
      setIsValidTaskName(true);
    }
  };

  return (
    <section className="flex justify-between p-4 border rounded border-gray-300 bg-gray-100">
      <div className="flex flex-grow flex-col justify-center mr-20">
        <div className="flex items-center">
          <span className="font-semibold mr-2">Task:</span>
          <input 
            type="text"
            value={taskName}
            placeholder="What did you do?"
            className="border rounded border-gray-400 p-2 w-full"
            onChange={evt => setTaskName(evt.target.value)}
          />
        </div>
        {isValidTaskName
          ? ""
          : <p className="ml-12 mt-1 text-red-500">Task name cannot be empty!</p>
        }
      </div>
      <div>
        <div>
          <span className="font-semibold">Timer: </span>
          <span>{secondsElapsed} second(s)</span>
        </div>
        <div className="flex justify-between">
          <button 
            className="border rounded border-green-400 bg-green-300 p-1 w-full mr-2 transition-all delay-100 ease-in-out hover:shadow-lg hover:scale-110"
            onClick={() => modifyTimerBehavior("start")}
          >
            {isTimerStarted ? "PAUSE" : "START"}
          </button>
          <button 
            className="border rounded border-red-400 bg-red-300 p-1 w-full transition-all delay-100 ease-in-out hover:shadow-lg hover:scale-110"
            onClick={() => modifyTimerBehavior("stop")}
          >
            STOP
          </button>
        </div>
      </div>
    </section>
  )
};

export default TaskLogger;
