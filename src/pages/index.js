import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <h1 className="text-6xl font-bold text-white mb-8">Welcome to my page</h1>
      </div>
      <div className='bg-white h-96 w-9/12'>
        <ul className='flex justify-between bg-gray-500'>
          <li className='mx-4'><a href="">about</a></li>
          <li className='mx-4'><a href="">projects</a></li>
          <li className='mx-4'><a href="">CV</a></li>
          <li className='mx-4'><a href="">contact</a></li>
        </ul>
      </div>

    </main>
  )
}
