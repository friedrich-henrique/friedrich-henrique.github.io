import Image from 'next/image'
import Leading from '@/components/Leading'

const links = ['about', 'projects', 'resume', 'contact']
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24 text-white">
      <div className='mb-8'>
        <Leading text="Welcome to my page!" />
      </div>
      <div className='sm:w-full p-5 bg-[#FF003C] rounded-md'>
          <ul className='flex justify-between'>
            {
              links.map((link, index) => {
                return (
                  <li className='mx-4' key={index}>
                    <a href={`#${link}`}>{link}</a>
                  </li>
                )
              })
            }
          </ul>
      </div>

      <div id='about' className='my-5'> 
            Hi! Thanks for visiting my personal website. My name is Henrique Friedrich, I am an engineer from Brazil who is very interested in learning new things.
            Besides technologies I can say I am passionate about football, history and music. I am currently working as a software developer at a company called Logpiper.
            I am always looking for new opportunities to learn and grow as a developer. If you have any questions or if you want to collaborate with me, feel free to contact me.
      </div>

      <div id='projects' className='my-5'>
        projects here
      </div>

      <div id='resume' className='my-5'>
        projects here
      </div>

      <div id='contact' className='my-5'>
        contact here
      </div>
    </main>
  )
}
