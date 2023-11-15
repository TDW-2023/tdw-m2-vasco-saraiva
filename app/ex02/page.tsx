'use client'

import dynamic from 'next/dynamic'
import { Box, TodoCard, TodoTitle, Background } from '@/components/ex02/styles/ComponentStyles'
import SearchBar from '@/components/ex02/SearchBar'
import TodoFilter from '@/components/ex02/TodoFilter'
import TodoForm from '@/components/ex02/TodoForm'
import RemainingTasks from '@/components/ex02/RemainingTasks'
import TodoList from '@/components/ex02/TodoList'

const TodoProvider = dynamic(() =>
  import('../../components/ex02/TodoProvider'), { ssr: false }
)

const Ex02 = () => {
  return (
    <TodoProvider>
      <Background>
        <Box>
          <TodoCard>
            <TodoTitle>What needs to be done?</TodoTitle>
            <TodoForm />
            <TodoFilter />
            <SearchBar />
            <RemainingTasks />
            <TodoList />
          </TodoCard >
        </Box>
      </Background>
    </TodoProvider>

  )
}

export default Ex02