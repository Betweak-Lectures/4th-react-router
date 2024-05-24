import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "~/store/reducers/todo";

export default function TodoPage() {
  const todoInput = useRef();
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [cancelTodo, setCancelTodo] = useState(null);

  return (
    <div>
      <input type="text" ref={todoInput} />
      {cancelTodo && <button onClick={cancelTodo}>취소</button>}
      <button
        onClick={() => {
          const action = addTodo({
            todo: {
              text: todoInput.current.value,
            },
          });
          action.meta = {
            delay: 3000,
          };
          const cancelFn = dispatch(action);
          setCancelTodo(() => {
            return () => {
              cancelFn();
              setCancelTodo(null);
            };
          });
        }}
      >
        추가
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              onClick={() => {
                dispatch(removeTodo({ todoId: todo.id }));
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
