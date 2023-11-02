import { TodoFilterProps } from "@/types"


const TodoFilter = ({setFilter} : TodoFilterProps) => {

  const filters = ['All', 'Active', 'Completed']


  return (
    <div className="flex gap-2 mt-5">
      {filters.map((filter, index) => (

        <button
          key={filter + index}
          className="border-2 rounded-md border-gray-300 w-28 py-2 hover:bg-gray-100 transition-colors duration-200"
          onClick={e => e.currentTarget.textContent && setFilter(e.currentTarget.textContent)}>
          {filter}
        </button>

      ))}

    </div>
  )
}

export default TodoFilter