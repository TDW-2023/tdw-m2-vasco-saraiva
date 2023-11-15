import { TodoFormProps, TodoListProps } from "@/types/ex01"
import deleteTask from "@/util/ex01/DeleteTask"
import { useEffect, useState } from "react"
import { useRef } from "react"
import editTask from "@/util/ex01/EditTask"
import { TasksState } from "@/types/ex01"

const TodoList = ({task, tasks, setTasks }: TodoListProps) => {


  const [isEditing, setIsEditing] = useState<Boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      const end = inputRef.current.value.length;
      inputRef.current.setSelectionRange(end, end)
      inputRef.current!.focus()
    }
  }, [isEditing])

  function isCompletedChange(id: string) {
    const updatedTasks : TasksState[] = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      } else {
        return task
      }
    })

    setTasks(updatedTasks)
  }



  return (
    <div key={task.id} className="mt-4">

      {!isEditing ?
        <>
          <div className="flex items-center gap-3">
            <input
              defaultChecked={task.isCompleted && true}
              className='w-8 h-8'
              type="checkbox" name="isCompleted"
              onClick={() => isCompletedChange(task.id)}
            />
            <p>{task.name}</p>
          </div>

          <div className="flex items-center gap-2 mt-5">
            <button onClick={() => setIsEditing(!isEditing)}
              className="w-full border-2 hover:bg-black hover:text-white transition-colors duration-200 border-black py-2 rounded-md">
              Edit
            </button>

            <button onClick={() => deleteTask(tasks, setTasks, task.id)}
              className="bg-red-600 border-2 border-red-600 hover:border-red-800 hover:bg-red-800 transition-colors duration-200 w-full text-white py-2 rounded-md">
              Delete
            </button>
          </div>

        </>
        :
        <>
          <div className="flex items-center gap-3">
            <input
              className='px-5 py-3 border-2 border-black w-full'
              defaultValue={task.name}
              type="text"
              name="isCompleted"
              ref={inputRef}
            />
          </div>

          <div className="flex items-center gap-2 mt-5">
            <button onClick={() => setIsEditing(!isEditing)}
              className="w-full border-2 hover:bg-black hover:text-white transition-colors duration-200 border-black py-2 rounded-md">
              Cancel
            </button>

            <button onClick={() => { editTask(tasks, setTasks, task.id, inputRef.current!.value); setIsEditing(!isEditing) }}
              className="border-2 hover:bg-black hover:text-white transition-colors duration-200 border-black w-full py-2 rounded-md">
              Save
            </button>
          </div>

        </>
      }
    </div>
  )
}

export default TodoList