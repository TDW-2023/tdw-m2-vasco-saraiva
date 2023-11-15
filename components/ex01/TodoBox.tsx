'use client'

import TodoForm from "@/components/ex01/TodoForm"
import { useState, useEffect } from "react"
import TodoFilter from "@/components/ex01/TodoFilter"
import TodoList from "@/components/ex01/TodoList"
import SearchBar from "@/components/ex01/SearchBar"
import { TasksState } from "@/types/ex01"

const TodoBoxContext = () => {

    // Complete task list
    const [tasks, setTasks] = useState<TasksState[]>(
        getLocalStorage('tasks') ? getLocalStorage('tasks') : []
    )

    useEffect(() => {
        setLocalStorage('tasks', tasks)
    }, [tasks])

    // Task list according to selected filter
    const [filteredTasks, setFilteredTasks] = useState<TasksState[]>(tasks)

    // Task list according to selected filter and searched tasks
    const [searchedTasks, setSearchedTasks] = useState<TasksState[]>(filteredTasks)

    return (
        <section className="bg-white py-8 px-12 flex flex-col items-center justify-center rounded-md shadow-md" >
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


        </section >
    )
}

export default TodoBoxContext


function getLocalStorage(key: string) {
    const data = window.localStorage.getItem(key)
    return JSON.parse(data!)
}

function setLocalStorage(key: string, value: TasksState[]) {
    const data = JSON.stringify(value)
    return localStorage.setItem(key, data)
}