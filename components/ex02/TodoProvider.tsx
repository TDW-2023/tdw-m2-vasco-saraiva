'use client';

import React, { useState, useReducer, Dispatch, useEffect } from "react"
import generateId from "@/util/ex01/GenerateID";
import { createContext } from "react";
import { TasksState, FilteredTasksContext, SearchTasksContext, taskTypes } from "@/types/ex02";

// I made type assetions here since the alternative is typescript to infer that X might be null when in the in the end, since it's a context, it will not be.
export const Tasks = createContext<TasksState[]>({} as TasksState[])
export const TasksDispatch = createContext<Dispatch<taskTypes>>({} as Dispatch<taskTypes>)
export const FilteredTasks = createContext<FilteredTasksContext>({} as FilteredTasksContext)
export const SearchedTasks = createContext<SearchTasksContext>({} as SearchTasksContext)

interface TodoProviderProps{
    children: React.ReactNode
}

const TodoProvider = ({children} : TodoProviderProps) => {

    const [tasks, dispatch] = useReducer(tasksReducer,
        getLocalStorage('tasks_ex02') ? getLocalStorage('tasks_ex02') : []
    )

    function tasksReducer(tasks: TasksState[], action: taskTypes): TasksState[] {
        switch (action.type) {
            case 'addedTask': {
                if (action.taskName) {
                    return [
                        ...tasks,
                        {
                            id: generateId(),
                            taskName: action.taskName,
                            isCompleted: false
                        }
                    ]
                }
            }
            case 'editedTask': {
                const editedTasks = tasks.map(task => {
                    if (task.id === action.taskId && action.taskName) {
                        return {
                            ...task,
                            taskName: action.taskName
                        }
                    } else {
                        return task
                    }
                })

                return editedTasks
            }
            case 'updatedTask': {
                const updatedTasks = tasks.map(task => {
                    if (task.id === action.taskId) {
                        return {
                            ...task,
                            isCompleted: !task.isCompleted
                        }
                    } else {
                        return task
                    }
                })
                return updatedTasks
            }
            case 'deletedTask': {
                return tasks.filter(task => task.id != action.taskId)
            }
            default: {
                return tasks
            }
        }

    }

    // Task list according to selected filter
    const [filteredTasks, setFilteredTasks] = useState<TasksState[]>(tasks)

    // Task list according to selected filter and searched tasks
    const [searchedTasks, setSearchedTasks] = useState<TasksState[]>(filteredTasks)

    useEffect(() => {
        setLocalStorage('tasks_ex02', tasks)
    }, [tasks])


    return (
            <Tasks.Provider value={tasks}>
                <TasksDispatch.Provider value={dispatch}>
                    <FilteredTasks.Provider value={{ filteredTasks, setFilteredTasks }}>
                        <SearchedTasks.Provider value={{ searchedTasks, setSearchedTasks }}>
                            {children}
                        </SearchedTasks.Provider>
                    </FilteredTasks.Provider>
                </TasksDispatch.Provider>
            </Tasks.Provider>
    )
}

export default TodoProvider

function getLocalStorage(key: string) {
    const data = window.localStorage.getItem(key)
    if(data){
        return JSON.parse(data!)

    }
}

function setLocalStorage(key: string, value: TasksState[]) {
    const data = JSON.stringify(value)
    return localStorage.setItem(key, data)
}