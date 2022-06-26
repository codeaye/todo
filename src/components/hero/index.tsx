import { useDispatch, useSelector } from "react-redux";
import { remove, toggleDone } from "../../reducers/todo";
import { RootState } from "../../Store";
import Todo from "../todo";
import Empty from "./Empty";
import Stats from "./Stats";

const Hero = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch() as any;

  return (
    <div className="flex gap-2 h-5/6 w-full bg-base-200">
      <Stats />
      <div className="flex-grow h-full">
        {todos.todos.length > 0 ? (
          <div className="overflow-scroll h-full">
            {todos.todos
              .map((todo) => ({
                id: todo.id,
                title: todo.title,
                completed: todos.done.find((done) => done === todo.id)
                  ? true
                  : false,
              }))
              .sort((a, b) =>
                filter
                  ? (b.completed ? 1 : 0) - (a.completed ? 1 : 0)
                  : (a.completed ? 1 : 0) - (b.completed ? 1 : 0)
              )
              .map((todo, i) => {
                return (
                  <Todo
                    text={todo.title}
                    done={todo.completed}
                    onDelete={() => dispatch(remove(todo))}
                    onDoneChange={() => dispatch(toggleDone(todo))}
                    key={i}
                  />
                );
              })}
          </div>
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

export default Hero;
