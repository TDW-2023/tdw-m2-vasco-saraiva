'use client'

import TodoForm from "@/components/TodoForm"
import { useEffect, useState } from "react"
import { TasksState } from "@/types"
import TodoFilter from "@/components/TodoFilter"
import TodoList from "@/components/TodoList"
import generateId from "@/util/GenerateID"


export default function Home() {

  const [tasks, setTasks] = useState<TasksState[]>([{
    id: generateId(),
    name: 'Eat',
    isCompleted: false,
  }])

  const [filter, setFilter] = useState<String>('All')
  const [filteredTasks, setFilteredTasks] = useState<TasksState[]>(tasks)

  useEffect(() => {
    switch (filter) {
      case 'Active':
        setFilteredTasks(tasks.filter(task => task.isCompleted === false))
        break;
      case 'Completed':
        setFilteredTasks(tasks.filter(task => task.isCompleted === true))
        break;
      default:
        setFilteredTasks(tasks)
        break;
    }
    
    console.log(filteredTasks)

  }, [filter, tasks])

  return (
    <main className="flex justify-center items-center h-screen">
      <section className="bg-white py-8 px-12 flex flex-col items-center justify-center rounded-md">
        <h1 className="text-lg">What needs to be done?</h1>
        <TodoForm tasks={tasks} setTasks={setTasks} />
        <TodoFilter setFilter={setFilter} />

        <div className="flex flex-col justify-start w-full mt-6">
          <p className="font-bold text-lg">{filteredTasks.length} {filteredTasks.length === 1 ? 'task' : 'tasks'} remaining</p>

          {filteredTasks.map(task =>
              <TodoList filter={filter} task={task} tasks={tasks} setTasks={setTasks} />
          )}

        </div>


      </section>
    </main>
  )
}
