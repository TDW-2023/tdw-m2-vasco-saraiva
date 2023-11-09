import { TodoFilterProps } from "@/types"
import {useEffect, useState} from 'react'
import { TasksState } from "@/types"



const TodoFilter = ({tasks, setFilteredTasks} : TodoFilterProps) => {

  const [filter, setFilter] = useState<String>('All')

  useEffect(() => {
    
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
    
  }, [filter, tasks])
  

  const filters = ['All', 'Active', 'Completed']

  return (
    <div className="flex gap-2 mt-5">
      {filters.map((element, index) => (

        <button
          key={element + index}
          className={`border-2 rounded-md border-gray-300 w-28 py-2 hover:bg-gray-100 transition-colors duration-200
          ${element === filter && 'bg-gray-100'}`}
          onClick={e => e.currentTarget.textContent && setFilter(e.currentTarget.textContent)}>
          {element}
        </button>

      ))}

    </div>
  )
}

export default TodoFilter