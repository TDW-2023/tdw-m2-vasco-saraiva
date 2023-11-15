import { TasksDispatch } from '@/components/ex02/TodoProvider'
import { useContext } from 'react'

const useAddTasks = () => {

    const dispatch = useContext(TasksDispatch)

    if (dispatch) {
        return (text: string) => {
            dispatch({
                type: 'addedTask',
                taskName: text
            })
        }
    }

}

export default useAddTasks