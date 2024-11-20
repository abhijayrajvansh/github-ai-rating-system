import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto h-screen'>
      <div className='mb-5'>
      a gorgeous landing page, lol
      </div>
      <Link href={'/dashboard'}>
        <span className='text-blue-500 underline underline-offset-4 font-light'>click here to goto dashboard</span>
      </Link>
    </div>
  )
}

export default Home