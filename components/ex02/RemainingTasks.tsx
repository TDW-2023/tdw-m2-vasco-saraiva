import React, { useContext } from 'react'
import { RemainingText } from './styles/ComponentStyles'
import TodoList from './TodoList'
import { SearchedTasks } from './TodoProvider'
import { TasksState } from '@/types/ex01'

const RemainingTasks = () => {

    const {searchedTasks} = useContext(SearchedTasks)

    return (
        <>
            {searchedTasks.length > 0 ?
                <RemainingText>
                    {searchedTasks.length} {searchedTasks.length === 1 ? 'task' : 'tasks'} remaining
                </RemainingText>
                :
                <RemainingText>You don&apos;t have any tasks</RemainingText>
            }
        </>
    )
}

export default RemainingTasks