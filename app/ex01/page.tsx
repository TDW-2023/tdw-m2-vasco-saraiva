import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

const TodoBox = dynamic(() =>
  import('../../components/ex01/TodoBox'), { ssr: false }
)

export const metadata: Metadata = {
  title: 'Ex01 😺',
  description: 'This is exercise nº1.'
}

const Ex01 = () => {
  return (
    <main className='bg-gray-100'>
      <section className="flex justify-center items-start pt-20 h-screen">
        <TodoBox />
      </section>
    </main>
  )
}

export default Ex01