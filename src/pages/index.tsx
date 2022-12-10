import { NextPage } from "next";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Copyright from "../components/Copyright";
import NewTodoTextInput from "../components/NewTodoInput";
import TodoList from "../components/TodoList";
import UnderBar from "../components/UnderBar";
import { AppState, LocalStorageKey, recoilState } from "../lib/dataStructure";
import { Layout } from "../style";

const IndexPage: NextPage = () => {
  const appState = useRecoilValue<AppState>(recoilState);

  // if appState has changes, save it LocalStorage.
  useEffect((): void => {
    window.localStorage.setItem(
      LocalStorageKey.APP_STATE,
      JSON.stringify(appState) // convert JavaScript Object to string
    );
  }, [appState]);

  return (
    <Layout>
      <section className="todoapp">
        <NewTodoTextInput />
        {appState.todoList.length ? (
          <>
            <TodoList />
            <UnderBar />
          </>
        ) : null}
      </section>
      <Copyright />
    </Layout>
  );
};

export default IndexPage;
