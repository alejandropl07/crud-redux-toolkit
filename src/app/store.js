import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../feautures/tasks/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
