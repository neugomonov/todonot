import React, { createRef } from "react";
import { useRecoilState } from "recoil";
import { AppState, recoilState, Todo } from "../../lib/dataStructure";
import { UUID } from "../../lib/functions";
import { Layout } from "./style";

const NewTodoTextInput: React.FC = () => {
  const [appState, setAppState] = useRecoilState<AppState>(recoilState);
  const textInput: React.RefObject<HTMLInputElement> =
    createRef<HTMLInputElement>();
  function addTodo(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (textInput.current === null) return;
    if (e.key === "Enter" && textInput.current.value.trim().length > 0) {
      // make new TODO object
      const todo: Todo = {
        bodyText: textInput.current.value,
        completed: false,
        id: UUID(),
      };
      // add new TODO to entire TodoList
      setAppState({ todoList: [todo, ...appState.todoList] });
      // reset text input UI value
      textInput.current.value = "";
    }
  }
  return (
    <Layout>
      <header className="header">
        <h1>todos</h1>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          ref={textInput}
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => addTodo(e)}
          data-testid="new-todo-input-text"
          data-cy="new-todo-input-text"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        />
      </header>
    </Layout>
  );
};

export default NewTodoTextInput;
