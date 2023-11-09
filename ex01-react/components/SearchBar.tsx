import { SearchBarProps } from '@/types';
import React from 'react'
import { useRef, useEffect } from "react"

const SearchBar = ({filteredTasks, setSearchedTasks} : SearchBarProps) => {

    const inputRef = useRef<HTMLInputElement>(null) 

    useEffect(() => {
        searchTask(inputRef.current!.value)
    }, [filteredTasks])


    function searchTask(value : string){
        const regex = new RegExp(value, 'i');

        const searchedTasks = filteredTasks.filter(task => regex.test(task.name))
        console.log(searchedTasks)
        setSearchedTasks(searchedTasks)
    }

    return (
        <div className='w-full'>
            <input
                type="text"
                placeholder='Search your todo...🔍'
                className='bg-slate-100 w-full rounded-md py-3 px-3 mt-5 border-2 border-gray-300 focus:outline-none'
                ref={inputRef}
                onChange={e => searchTask(e.currentTarget.value)}
            />
        </div>
    )
}

export default SearchBar