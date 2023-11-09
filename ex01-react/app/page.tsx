'use client'

import TodoForm from "@/components/TodoForm"
import { useState, useEffect } from "react"
import { TasksState } from "@/types"
import TodoFilter from "@/components/TodoFilter"
import TodoList from "@/components/TodoList"
import SearchBar from "@/components/SearchBar"

export default function Home() {

  let storedTasks = getLocalStorage('tasks')

  // Complete task list
  const [tasks, setTasks] = useState<TasksState[]>(
    storedTasks ?
      storedTasks :
      []
  )

  // Task list according to selected filter
  const [filteredTasks, setFilteredTasks] = useState<TasksState[]>(tasks)

  // Task list according to selected filter and searched tasks
  const [searchedTasks, setSearchedTasks] = useState<TasksState[]>(filteredTasks)

  useEffect(() => {
    setLocalStorage('tasks', tasks)
  }, [tasks])

  return (
    <main className="flex justify-center items-start pt-20 h-screen">
      <section className="bg-white py-8 px-12 flex flex-col items-center justify-center rounded-md shadow-md">
        <h1 className="text-lg">What needs to be done?</h1>
        <TodoForm tasks={tasks} setTasks={setTasks} />
        <SearchBar filteredTasks={filteredTasks} setSearchedTasks={setSearchedTasks} />
        <TodoFilter tasks={tasks} setFilteredTasks={setFilteredTasks} />

        <div className="flex flex-col justify-start w-full mt-6">
          {searchedTasks.length > 0 ?
            <p className="font-bold text-lg">{searchedTasks.length} {searchedTasks.length === 1 ? 'task' : 'tasks'} remaining</p>
            :
            <p className="font-bold text-lg">You don't have any tasks</p>
          }

          {searchedTasks.map(task =>
            <TodoList key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
          )}

        </div>


      </section>
    </main>
  )
}


function getLocalStorage(key: string) {
  const data = window.localStorage.getItem(key)

  return JSON.parse(data!)
}

function setLocalStorage(key: string, value: TasksState[]) {
  const data = JSON.stringify(value)

  return window.localStorage.setItem(key, data)
}