import { TodoFormProps } from "@/types"
import { useRef } from "react"
import addTask from "@/util/AddTask"

const TodoForm = ({ tasks, setTasks }: TodoFormProps) => {

    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <>
            <div className="flex flex-col justify-center items-center w-full mt-5">
                <input
                    className="px-5 py-3 border-2 border-black w-full"
                    placeholder="Add your to do..."
                    type="text"
                    ref={inputRef}
                />
                
                <button type="button" className="bg-black text-white py-3 w-full hover:scale-105 hover:rounded-md transition-all  rounded-b-md duration-100" onClick={() => addTask(inputRef, setTasks)}>Add</button>
            </div>
        </>
    )
}

export default TodoForm
