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
  filter: String
  task: TasksState
  tasks: TasksState[]
  setTasks: Dispatch<SetStateAction<TasksState[]>>
}

export interface TodoFilterProps {
  setFilter: Dispatch<SetStateAction<String>>
}