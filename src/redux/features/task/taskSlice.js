import { createSlice } from "@reduxjs/toolkit";

// defining initial state

export const taskSlice = createSlice({
  name: "task",
  initialState: JSON.parse(localStorage.getItem("tasks")) || [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: state.length,
        title: action.payload,
        completed: false,
      };
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    completeTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
  },
});

export const { addTask, deleteTask, completeTask } = taskSlice.actions;
export default taskSlice.reducer;
