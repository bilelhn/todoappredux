import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const details = () => {
    const {id} = useParams();
    const myTodos = useSelector((state) => state.todoReducer.myTodos);
    console.log( myTodos);
  return (
    <div>
        {myTodos.filter((el)=> el.id == id ).map((el)=> <p> {el.task}</p>)}
    </div>
  )
}

export default details;