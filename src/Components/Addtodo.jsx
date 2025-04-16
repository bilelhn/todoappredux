import { useState } from "react";
import { addTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

const Addtodo = () => {
  const [newtodo, setNewtodo] = useState(""); 
  const dispatch = useDispatch();           

  const addHandler = () => {
    if (newtodo.trim()) {
      const addedtask = {
        id: Math.random(),
        task: newtodo,
        completed: false,
      };
      dispatch(addTodo(addedtask));  
      setNewtodo("");               
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center gap-3  p-4 w-50">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add new task"
          value={newtodo}
          onChange={(e) => setNewtodo(e.target.value)}
        />
      </div>
      <button
        type="button"
        onClick={addHandler}
        className="btn btn-primary"
        style={{ width: "200px" }}
      >
        Add Task
      </button>
    </div>
  );
};

export default Addtodo;
