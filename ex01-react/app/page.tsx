import dynamic from 'next/dynamic'

const TodoBox = dynamic(() =>
  import('../components/TodoBox'), {ssr: false}
)

export default function Home() {
    return (
      <main className="flex justify-center items-start pt-20 h-screen">
        <TodoBox />
      </main>
    )
}


