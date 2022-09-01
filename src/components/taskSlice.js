import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    currentId: 0,
    tasks: [],
  },
  reducers: {
    addTask: (state, { payload }) => {
      const newId = state.currentId + 1;
      state.currentId = newId;
      state.tasks = [
        ...state.tasks,
        {
          id: newId,
          ...payload,
        },
      ];
    },
    clearTasks: state => {
      state.tasks = [];
    }
  },
});

export const { addTask, clearTasks } = taskSlice.actions;

export default taskSlice.reducer;
