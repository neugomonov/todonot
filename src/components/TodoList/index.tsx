import { AppState, recoilState, Todo } from "lib/dataStructure";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import React from "react";
import { useRecoilState } from "recoil";
import Item from "./Item";
import { Layout } from "./style";

const TodoList: React.FC = () => {
  const { asPath } = useRouter();
  const [appState, setAppState] = useRecoilState<AppState>(recoilState);
  function toggleAllCheckbox(e: React.ChangeEvent<HTMLInputElement>): void {
    /* eslint-disable-line prettier/prettier */
    // reverse all todo.completed: boolean flag
    setAppState({
      todoList: appState.todoList.map(
        (t: Todo): Todo => ({ ...t, completed: e.target.checked })
      ),
    }); /* eslint-disable-line prettier/prettier */
  }
  return (
    <Layout>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={toggleAllCheckbox}
          data-cy="toggle-all-btn"
          data-testid="toggle-all-btn"
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list" data-testid="todo-list">
          {appState.todoList
            .filter((t: Todo): boolean => {
              switch (asPath) {
                case "/":
                  return true;
                case "/active":
                  return t.completed === false;
                case "/completed":
                  return t.completed === true;
                default:
                  return true;
              }
            })
            .map((t: Todo): ReactElement => {
              return <Item key={t.id} todo={t} />;
            })}
        </ul>
      </section>
    </Layout>
  );
};

export default TodoList;
