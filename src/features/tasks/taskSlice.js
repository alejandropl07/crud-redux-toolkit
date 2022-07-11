import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 description",
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => [...state, action.payload],
    deleteTask: (state, action) =>
      state.filter((task) => task.id !== action.payload),
    editTask: (state, action) =>
      state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      ),
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
