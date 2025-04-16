import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const todoSlice = createSlice({
  name: "todo",
  initialState: { myTodos: data },
  reducers: {
    deleteTodo: (state, action) => {
      state.myTodos = state.myTodos.filter((el) => el.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.myTodos = state.myTodos.map((el) =>
        el.id === action.payload.id ? { ...el, task: action.payload.task } : el
      );
    },
    addTodo : (state, action) =>{
      state.myTodos=[...state.myTodos,action.payload]
    },
  },
});

export default todoSlice.reducer;
export const { deleteTodo, editTodo,  addTodo } = todoSlice.actions;
