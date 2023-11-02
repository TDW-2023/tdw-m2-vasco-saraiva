import { TasksState } from "@/types";
import { Dispatch, SetStateAction } from "react"

export default function editTask(tasks: TasksState[], setTasks: Dispatch<SetStateAction<TasksState[]>>, id: string, name: string) {
    const updatedTasks = tasks.map(task => {
        if (task.id === id) {
            return {
                ...task,
                name: name
            }
        }else{
            return task
        }
    })

    setTasks(updatedTasks)
}