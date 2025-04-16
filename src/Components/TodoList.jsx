import { useSelector } from "react-redux";
import Todo from "./todo";
import Addtodo from "./Addtodo";


const TodoList = () => {
    const myTodos = useSelector((state) => state.todoReducer.myTodos);



    console.log({myTodos})
  return (
    <div>
        <Addtodo/>

         {myTodos.map((el) => 
         <Todo key={el.id} todoItem={el}/>
        )}
    </div>
  );
};

export default TodoList;
