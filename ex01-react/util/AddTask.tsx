import { Dispatch, RefObject, SetStateAction } from "react";
import generateId from "./GenerateID";
import { TasksState } from "@/types";

export default function addTask(inputRef : RefObject<HTMLInputElement>, setTasks: Dispatch<SetStateAction<TasksState[]>>) {
        
    if (inputRef.current && inputRef.current!.value.trim() != '') {
        setTasks(oldTasks => [...oldTasks, {
            id: generateId(),
            name: inputRef.current!.value,
            isCompleted: false,
        }])
        
        inputRef.current.defaultValue = '';
    }

}