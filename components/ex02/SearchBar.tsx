import React, { useContext, useState } from 'react'
import {useEffect } from "react"
import {DivSearchTodo, TodoInput} from './styles/ComponentStyles';
import { FilteredTasks, SearchedTasks } from './TodoProvider';
import { TasksState } from '@/types/ex02';


const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('')
    const {filteredTasks} = useContext(FilteredTasks)
    const {setSearchedTasks} = useContext(SearchedTasks)

    useEffect(() => {
        searchTask(searchInput)
    }, [filteredTasks, searchInput])

    function searchTask(value : string){
        const regex = new RegExp(value, 'i');
        const searchedTasks = filteredTasks.filter((task : TasksState) => regex.test(task.taskName))
        console.log(searchedTasks)
        setSearchedTasks(searchedTasks)
    }

    return (
        <DivSearchTodo>
            <TodoInput
                type="text"
                placeholder='Search your todo...🔍'
                className=''
                defaultValue={searchInput}
                onChange={e => setSearchInput(e.currentTarget.value)}
            />
        </DivSearchTodo>
    )
}

export default SearchBar