import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./components/taskSlice";

export default configureStore({
  reducer: {
    task: taskSlice
  }
});
