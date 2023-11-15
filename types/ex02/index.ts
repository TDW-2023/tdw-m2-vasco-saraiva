import {Dispatch, SetStateAction} from "react"

export interface TasksState {
    id: string
    taskName: string
    isCompleted: boolean
  }

export interface taskTypes {
  type: string;
  taskName?: string;
  taskId?: string;
}

export interface FilteredTasksContext{
  filteredTasks: TasksState[];
  setFilteredTasks: Dispatch<SetStateAction<TasksState[]>>
}

export interface SearchTasksContext{
  searchedTasks: TasksState[];
  setSearchedTasks: Dispatch<SetStateAction<TasksState[]>>
}

export interface TodoListProps{
  task: TasksState
}