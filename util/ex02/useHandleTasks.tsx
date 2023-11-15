import { useContext, useMemo } from 'react';
import { Tasks, TasksDispatch } from '@/components/ex02/TodoProvider';

export default function useHandleTasks(type: string) {

    const dispatch = useContext(TasksDispatch);

    if (dispatch != null){
        switch (type) {
            case 'add':
                return (text : string) => {
                    dispatch({
                        type: 'added_task',
                        taskName: text,
                    });
                };
            case 'edit':
                return (id : string, text : string) => {
                    dispatch(
                        {
                            type: 'changed_task',
                            taskId: id,
                            taskName: text
                        }
                    )
                }
    
            case 'update':
                return (id : string) => {
                    dispatch(
                        {
                            type: 'changed_task_completion',
                            taskId: id
                        }
                    )
                }
    
            case 'delete':
                return (id : string) => {
                    dispatch({
                        type: 'deleted_task',
                        taskId: id
                    });
                };
        }
    }
    

}


