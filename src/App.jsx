import { useEffect, useState } from "react";
import TaskLogger from "./components/TaskLogger";
import TimesList from "./components/TimesList";

const App = () => {
  return (
    <main className="mx-60 my-10">
      <TaskLogger />
      <TimesList />
    </main>
  );
};

export default App;
