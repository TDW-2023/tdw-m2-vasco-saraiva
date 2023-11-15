import { Dispatch, SetStateAction } from "react"

export interface TasksState {
  id: string
  name: string
  isCompleted: boolean
}

export interface TodoFormProps {
  tasks: TasksState[]
  setTasks: Dispatch<SetStateAction<TasksState[]>>
}

export interface TodoListProps {
  task: TasksState
  tasks: TasksState[]
  setTasks: Dispatch<SetStateAction<TasksState[]>>
}

export interface TodoFilterProps {
  tasks: TasksState[]
  setFilteredTasks: Dispatch<SetStateAction<TasksState[]>>
}

export interface SearchBarProps {
  filteredTasks: TasksState[]
  setSearchedTasks: Dispatch<SetStateAction<TasksState[]>>
}