import {TasksState } from "@/types";
import { Dispatch, SetStateAction } from "react"

export default function deleteTask(tasks : TasksState[], setTasks: Dispatch<SetStateAction<TasksState[]>>, id: string) {
    setTasks(tasks.filter(task => task.id !== id));
  }