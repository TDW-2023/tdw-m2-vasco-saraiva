import {useContext, useEffect, useState} from 'react'
import { TasksState } from '@/types/ex02'
import { FilteredTasks, Tasks } from "./TodoProvider"
import { ButtonTodoFilter, DivTodoFilter } from "./styles/ComponentStyles"


const TodoFilter = () => {

  const [filter, setFilter] = useState<String>('All')
  const tasks = useContext(Tasks)
  const {setFilteredTasks} = useContext(FilteredTasks)

  useEffect(() => {
    
    if(tasks != null){
      let tasksToFilter: TasksState[] = tasks

      switch (filter) {
        case 'Active':
          tasksToFilter = tasks.filter(task => task.isCompleted === false)
          break;
        case 'Completed':
          tasksToFilter = tasks.filter(task => task.isCompleted === true)
          break;
      }
    
      setFilteredTasks(tasksToFilter)
    }
    
    
  }, [filter, tasks])
  

  const filters = ['All', 'Active', 'Completed']

  return (
    <DivTodoFilter>
      {filters.map((element, index) => (

        <ButtonTodoFilter
          $isSelected={filter === element ? true : false}
          key={element + index}
          onClick={e => e.currentTarget.textContent && setFilter(e.currentTarget.textContent)}>
          {element}
        </ButtonTodoFilter>

      ))}

    </DivTodoFilter>
  )
}

export default TodoFilter