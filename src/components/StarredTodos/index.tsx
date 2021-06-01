import { useSelector } from "react-redux";
import { RootState } from "../../store/mainReducer";
import { TodoType } from "../../types/types";
import Todo from "../Todo";

const StarredTodos: React.FC = () => {

  const todos: {[key: string]: TodoType} = useSelector((state: RootState) => state.todo.todos);
  const todosListElement = Object.keys(todos).map((key: string) => <Todo key={key} id={key} todo={todos[key]}/>)

  return (
    <>
      <h2>
        Starred
      </h2>
      {todosListElement}
    </>
  )
}

export default StarredTodos;