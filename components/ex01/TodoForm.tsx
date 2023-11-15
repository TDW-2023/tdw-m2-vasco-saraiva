import { TodoFormProps } from "@/types/ex01"
import { useRef } from "react"
import addTask from "@/util/ex01/AddTask"


const TodoForm = ({ tasks, setTasks }: TodoFormProps) => {

    const inputRef = useRef<HTMLInputElement>(null)


    return (
        <>
            <form onSubmit={e => {e.preventDefault(), addTask(tasks, inputRef, setTasks)}} className="flex flex-col justify-center items-center w-full mt-5">
                <input
                    className="px-5 py-3 border-2 border-black w-full"
                    placeholder="Add your to do... 📌"
                    type="text"
                    ref={inputRef}
                />
                
                <button type="submit" className="bg-black text-white py-3 w-full hover:scale-105 hover:rounded-md transition-all  rounded-b-md duration-100">Add</button>
            </form>
        </>
    )
}

export default TodoForm
