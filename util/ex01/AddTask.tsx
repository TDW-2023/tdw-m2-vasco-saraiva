import { Dispatch, RefObject, SetStateAction } from "react";
import generateId from "./GenerateID";
import { TasksState } from "@/types/ex01";

export default function addTask(
    tasks: TasksState[],
    inputRef: RefObject<HTMLInputElement>,
    setTasks: Dispatch<SetStateAction<TasksState[]>>
) {

    if (inputRef.current && inputRef.current!.value.trim() != '') {

        // Prevents saving empty input value when it resets right after setstate
        const inputValue : string = inputRef.current.value

        setTasks(oldTasks => [...oldTasks, {
            id: generateId(),
            name: inputValue,
            isCompleted: false,
        }])

        inputRef.current.value = ''
    }


}