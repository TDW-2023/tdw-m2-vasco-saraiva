import { TasksDispatch } from '@/components/ex02/TodoProvider'
import { useContext } from 'react'

const useUpdateTasks = () => {
 
    const dispatch = useContext(TasksDispatch)

    if (dispatch) {
        return (id: string) => {
            dispatch({
                type: 'updatedTask',
                taskId: id
            })
        }
    }
}

export default useUpdateTasks