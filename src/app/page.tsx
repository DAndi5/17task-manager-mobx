'use client'
import Image from "next/image";
import {useStore} from "./stores/store";
import {observer} from "mobx-react-lite";
import {useEffect, useMemo} from "react";
import Task from "./components/tasks/Task";
import Link from "next/link";


import {StoreContext, store} from "./stores/store";

const Home = () => {
// export default function Home() {
  const {taskStore} = useStore();
  const {loadTasks, tasks} = taskStore;
  useEffect(() => {
    loadTasks();
  }, []);

  // const { tasks } = taskStore;

  // const taskStore = useMemo(() => new useStore(), []);
  // const { taskStore } = useStore();
  // const {tasks} = taskStore;


  // useEffect(() => {
  //   async function TasksList() {
  //     const response = await store.loadTasks();
  //     // const response = await store.fetchTasks();
  //     console.log(response);
  //     return setResults(response);
  //   }
  //   loadTasks();
  // }, [store]);
  //
  // useEffect(() => {
  //   if (JSON.parse(localStorage.getItem("todos-items")!) !== null) {
  //     todoStore.todos = JSON.parse(localStorage.getItem("todos-items")!)
  //   }
  // }, []);

  return (
    <>
      <StoreContext.Provider value={store}>
        <Link
          href={`/create`}
          className="bg-blue-500 text-white p-4 rounded-2xl font-bold transition-all shadow shadow-blue-500 hover:bg-black hover:shadow-black text-lg"
        >
          Add Task
        </Link>

        <div className="w-full flex flex-col gap-7 items-center">
          {tasks.map((t) => {
            console.log(t.id);
            return <Task key={t.id} task={t}/>;
          })}
        </div>
      </StoreContext.Provider>
    </>
  );
}
export default observer(Home);
