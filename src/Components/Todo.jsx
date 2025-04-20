import { RiDeleteBin2Line } from "react-icons/ri";
import { deleteTodo, editTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { Link } from "react-router-dom";

const Todo = ({ todoItem }) => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(deleteTodo(todoItem.id));
  };

  const [newtask, setNewtask] = useState(todoItem.task);  // initialisation avec la valeur actuelle de la tâche
  const [changed, setChanged] = useState(false);
  const handleChange = () => {
    // Validation avant de dispatcher l'action
    if (newtask.trim() !== todoItem.task) {
      dispatch(editTodo({ id: todoItem.id, task: newtask }));
      setChanged(false);
      setEdited(false);  // Désactive le mode édition après la sauvegarde
    }
  };

  const [edited, setEdited] = useState(false);

  return (
    <div className="d-flex ">

      
      <div className="d-flex gap-2 border-bottom align-items-center bg-light text-dark p-3 w-50">
        {edited ? (
          <>
            <input
              value={newtask}  
              onChange={(e) => {
                setNewtask(e.target.value);
                setChanged(true);
              }}
            />
            <MdOutlineCancel onClick={() => setEdited(false)} className="text-danger cursor-pointer" />
            {changed ? <GiConfirmed onClick={handleChange} className="text-success cursor-pointer" /> : ""}
          </>
        ) : (
          <div>{todoItem.task}</div>
        )}

        <div>{todoItem.completed ? "Completed " : "Not yet"}</div>
        <div className="d-flex gap-2 p-3 w-50">
          <RiDeleteBin2Line
            onClick={handleDelete}
            className="text-danger cursor-pointer"
          />
          <FaEdit onClick={() => setEdited(!edited)} className="text-primary cursor-pointer" />
         
        </div>
        <Link to={`/todo/${todoItem.id}`}>
            <button type="button" className="btn btn-secondary">
              Check details
            </button>
          </Link>
      </div>
    </div>
  );
};

export default Todo;
