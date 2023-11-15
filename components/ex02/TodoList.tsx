import { useContext, useEffect, useState } from "react"
import { useRef } from "react"
import { BoxButtonsTodoList, BoxItemTodoList, BoxTodoList, ButtonTodoList, DeleteButtonTodoList, InputCheckTodoList, TodoInput } from "./styles/ComponentStyles"
import { TodoListProps } from "@/types/ex02"
import useUpdateTasks from "@/util/ex02/useUpdateTasks"
import useEditTasks from "@/util/ex02/useEditTasks"
import useDeleteTasks from "@/util/ex02/useDeleteTasks"
import { TasksState } from "@/types/ex02"
import { SearchedTasks } from "./TodoProvider"


const TodoList = () => {

  const [isEditing, setIsEditing] = useState<Boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const { searchedTasks } = useContext(SearchedTasks)

  useEffect(() => {
    if (inputRef.current) {
      const end = inputRef.current.value.length;
      inputRef.current.setSelectionRange(end, end)
      inputRef.current!.focus()
    }
  }, [isEditing])

  const updateTask = useUpdateTasks()
  const editTask = useEditTasks()
  const deleteTask = useDeleteTasks()

  const taskList = searchedTasks.map((task: TasksState) => {
    return (
      <BoxTodoList key={task.id}>

        {!isEditing ?
          <>
            <BoxItemTodoList >
              <InputCheckTodoList
                defaultChecked={task.isCompleted && true}
                type="checkbox" name="isCompleted"
                onClick={() => updateTask && updateTask(task.id)}
              />
              <p>{task.taskName}</p>
            </BoxItemTodoList>

            <BoxButtonsTodoList>
              <ButtonTodoList onClick={() => setIsEditing(!isEditing)}
              >
                Edit
              </ButtonTodoList>

              <DeleteButtonTodoList onClick={() => deleteTask && deleteTask(task.id)}
              >
                Delete
              </DeleteButtonTodoList>
            </BoxButtonsTodoList>

          </>
          :
          <>
            <BoxItemTodoList>
              <TodoInput
                defaultValue={task.taskName}
                type="text"
                name="isCompleted"
                ref={inputRef}
              />
            </BoxItemTodoList>

            <BoxButtonsTodoList>
              <ButtonTodoList onClick={() => setIsEditing(!isEditing)}>
                Cancel
              </ButtonTodoList>

              <ButtonTodoList onClick={() => { editTask && inputRef.current && editTask(task.id, inputRef.current?.value); setIsEditing(!isEditing) }}>
                Save
              </ButtonTodoList>
            </BoxButtonsTodoList>

          </>
        }
      </BoxTodoList>
    )
  })

  return (
    <>
      {taskList}
    </>
  )


}

export default TodoList