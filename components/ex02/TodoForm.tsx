import { useRef } from "react"
import {ButtonAddTodo, FormAddTodo, TodoInput} from "./styles/ComponentStyles"
import useAddTasks from "@/util/ex02/useAddTasks"

const TodoForm = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    
    const addTask = useAddTasks()

    function submitTask() {
        if (inputRef.current && addTask) {
            addTask(inputRef.current.value)
            inputRef.current.value = '';
        }
    }

    return (
        <>
            <FormAddTodo
                onSubmit={e => {
                    e.preventDefault(),
                        inputRef.current?.value.trim().length !== 0 && submitTask()
                }}>


                <TodoInput
                    placeholder="Add your to do... 📌"
                    type="text"
                    ref={inputRef}
                />
                <ButtonAddTodo type="submit">Add</ButtonAddTodo>
            </FormAddTodo>
        </>
    )
}

export default TodoForm
