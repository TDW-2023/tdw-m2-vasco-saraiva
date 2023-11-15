import { TasksDispatch } from '@/components/ex02/TodoProvider'
import { useContext } from 'react'

const useEditTasks = () => {
  
    const dispatch = useContext(TasksDispatch)

    if (dispatch) {
        return (text:string, id: string) => {
            dispatch({
                type: 'editedTask',
                taskName: text,
                taskId: id
            })
        }
    }
}

export default useEditTasks