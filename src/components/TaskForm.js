import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTask } from "../features/tasks/taskSlice";

const TaskForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
      ></textarea>

      <button type="submit">Save</button>
    </form>
  );
};

export default TaskForm;
