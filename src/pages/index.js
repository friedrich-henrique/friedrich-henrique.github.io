import ImageList from '@/components/ImageList';
import Leading from '@/components/Leading'
import Projects from '@/components/Projects';
import Resume from '@/components/MyResume';

const links = ['about', 'projects', 'resume', 'pics', 'contact']
const images = [
  {
    src: '/personal_images/dia_da_viagem.jpg',
    alt: 'Farewell',
    description: 'When I moved to Hungary',
  },
  {
    src: '/personal_images/arte.jpg',
    alt: 'Art collage',
    description: 'Some arts I visited',
  },
  {
    src: '/personal_images/aleatoria_paris.jpg',
    alt: 'Paris',
    description: 'When I finally visited Paris',
  },
  
  {
    src: '/personal_images/cafe_grecia.jpg',
    alt: 'Coffee and sun',
    description: 'Coffee and sun',
  },
  {
    src: '/personal_images/cafe_moido.jpg',
    alt: 'Coffee to be grinded',
    description: "That's how I like it!",
  },
  
  {
    src: '/personal_images/duda_arvore.jpg',
    alt: 'My dog',
    description: 'My dog and a tree',
  },
  {
    src: '/personal_images/duda_bandeira.jpg',
    alt: 'My dog at the flag',
    description: 'My dog and the Brazilian flag',
  },
  {
    src: '/personal_images/familia_buda.jpg',
    alt: 'Family', 
    description: 'Family in Budapest',
  },
  {
    src: '/personal_images/formado.jpg',
    alt: 'Finally graduated',
    description: 'Finally graduated',
  },
  {
    src: '/personal_images/natal.jpg',
    alt: 'Chirstmas',
    description: 'We also celebrate Chirstmas',
  },
  {
    src: '/personal_images/vo_colorada.jpg',
    alt: 'Grandma',
    description: 'Grandma colorada',
  },
  {
    src: '/personal_images/paradise.jpg',
    alt: 'Paradise',
    description: 'Brazilian paradise',
  },
];


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24 text-white text-center">
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

      <div id='about' className='px-4 my-5'>
        <p className='leading-loose'>
          Hi! Thanks for visiting my personal website. My name is Henrique Friedrich, I am an engineer from Brazil who is very interested in learning new things.
          Besides technologies I can say I am passionate about football, history and music.
        </p>
        <p className='leading-loose'>
          I am currently working as a software developer at a company called Logpiper.
          I am always looking for new opportunities to learn and grow as a developer. If you have any questions or if you want to collaborate with me, feel free to contact me.
        </p>
      </div>

      <div id='projects' className='w-full my-5'>
        <Projects/>
      </div>

      <div id='resume' className='w-full my-5'>
        <Resume/>
      </div>

      <div id='pics' className='my-5'>
        <ImageList images={images}></ImageList>
      </div>

      <div id='contact' className='flex justify-between w-1/2 my-5'>
        <div className='rounded-full p-5 hover:bg-[#FF003C] hover:opacity-25'>
          <a href="https://www.linkedin.com/in/h-friedrich" target='_blank'>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="white"
                viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </span>
          </a>
        </div>
        <div className='rounded-full p-5 hover:bg-[#FF003C] hover:opacity-25'>
          <a href="https://github.com/friedrich-henrique" target="_blank">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </span>
          </a>
        </div>
        <div className='rounded-full p-5 hover:bg-[#FF003C] hover:opacity-25'>
          <a href="https://www.facebook.com/henrique.friedrichdeoliveira" target='_blank'>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </span>
          </a>
        </div>
        <div className='rounded-full p-5 hover:bg-[#FF003C] hover:opacity-25'>
          <a href="https://twitter.com/hiquefriedrich" target='_blank'>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </main>
  )
}
