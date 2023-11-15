import { TasksDispatch } from '@/components/ex02/TodoProvider'
import { useContext } from 'react'

const useDeleteTasks = () => {
    
    const dispatch = useContext(TasksDispatch)

    if (dispatch) {
        return (id: string) => {
            dispatch({
                type: 'deletedTask',
                taskId: id
            })
        }
    }
}

export default useDeleteTasks