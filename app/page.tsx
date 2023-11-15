import Link from 'next/link'

export default function Home() {
    return (
      <main className='bg-gray-100 border-gray-300 border px-10 py-16 my-24 w-[1000px] rounded mx-auto'>
        <h1 className='font-bold text-5xl'>My TDW Exercises 😺</h1>
        <p className='mt-3 text-gray-500'>This is a list of exercises made by Vasco Saraiva.</p>
        <hr className=' my-8 border-gray-300' />
        <section className='flex flex-col gap-6'>
          <Link className='font-bold text-xl' href={'/ex01'}>Ex01</Link>
          <Link className='font-bold text-xl' href={'/ex02'}>Ex02</Link>
        </section>
      </main>
    )
}


