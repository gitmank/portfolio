'use client'

import Image from 'next/image'
import { IBM_Plex_Mono } from 'next/font/google'
import { useEffect } from 'react'

const mono = IBM_Plex_Mono({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  style: ['italic', 'normal']
})

export default function Home() {

  useEffect(() => {
    document.addEventListener('pointermove', updateCursorPosition, { passive: true })
    return(() => {
      document.removeEventListener('pointermove', updateCursorPosition)
    })
  })

  const updateCursorPosition = (event) => {
    const cursor = document.getElementById('cursor')
    cursor.style.left = (event.clientX + 'px')
    cursor.style.top = (event.clientY + 'px')
  }

  const ICON_SIZE = 48
  const PROFILE_PIC_SIZE = 400

  return (
    <main className={`${mono.className} bg-white cursor-none text-black flex h-max w-full flex-col`}>
      <section className={`flex min-h-screen h-screen flex-col items-center justify-start border-black`}>
        <header className='flex flex-row h-max w-full p-5 lg:p-10 border-b-black justify-between items-center border-[0.5px]'>
          <h1 className='text-xl lg:text-2xl'>Manomay Kagalkar</h1>
          <aside className='flex flex-row h-max w-max justify-start items-center gap-5 lg:gap-10'>
            <a href={'https://github.com/gitmank'} target={'_blank'}>
              <Image
                className='w-[24px] md:w-[32px] lg:2-[36px]'
                src={'/github.png'}
                width={ICON_SIZE}
                height={ICON_SIZE}
                alt={'github icon'}
              ></Image>
            </a>
            <a href={'https://www.linkedin.com/in/manomaykagalkar/'} target={'_blank'}>
              <Image
                className='w-[24px] md:w-[32px] lg:2-[36px]'
                src={'/linkedin.png'}
                width={ICON_SIZE}
                height={ICON_SIZE}
                alt={'linked icon'}
              ></Image>
            </a>
            <a href={'mailto:manomay111@gmail.com'}>
              <Image
                className='w-[24px] md:w-[32px] lg:2-[36px]'
                src={'/email.png'}
                width={ICON_SIZE}
                height={ICON_SIZE}
                alt={'email icon'}
              ></Image>
            </a>
          </aside>
        </header>
        <section className='flex flex-col-reverse md:flex-row h-5/6 w-full lg:w-11/12 xl:w-10/12 items-center justify-evenly lg:justify-between gap-3'>
          <aside id='spotlight-pane' className='flex flex-col items-center font-bold text-3xl md:text-4xl text-center lg:text-5xl xl:text-6xl justify-center w-full h-max gap-1'>
            <h1>Web Development</h1>
            <span>+</span>
            <h1>Web Security</h1> 
          </aside>
          <div id='cursor' className='cursor hidden lg:flex'></div>
          <aside className='flex flex-col items-center justify-center w-full'>
            <Image
              className='rounded-lg w-[300px] lg:w-[400px] hover:scale-x-1 hover:scale-y-1 shadow-lg duration-500 hover:shadow-gray-800'
              src={'/manomay.png'}
              width={PROFILE_PIC_SIZE}
              height={PROFILE_PIC_SIZE}
              alt={'Manomay\'s profile picture'}
            ></Image>
          </aside>
        </section>
        {/* <a href='#personalised-tours' className='p-3 flex flex-row h-max w-full items-center justify-center'>
          <button className='p-1 hover:bg-black hover:text-white border-[1px] rounded-sm hover:rounded-md border-black px-3'>More</button>
        </a> */}
      </section>
      {/* <section id='personalised-tours' className={`flex min-h-screen h-max flex-col bg-white text-black items-center justify-evenly border-black px-5 lg:px-20`}>
        <article className='flex flex-col w-max self-start h-max text-left gap-3 p-1'>
          <h1 className='text-2xl lg:text-3xl font-bold'>Are you a&nbsp;<span className='border-b-2 border-green-300'>recruiter?</span></h1>
          <div>
            <h3 className='text-lg'>take the 120 second tour</h3>
          </div>
        </article>
        <article className='flex flex-col w-max self-end h-max text-right gap-3 p-1'>
          <h1 className='text-2xl lg:text-3xl font-bold'>Are you a&nbsp;<span className='border-b-2 border-sky-300'>recruiter?</span></h1>
          <div>
            <h3 className='text-lg'>take the 120 second tour</h3>
          </div>
        </article>
        <article className='flex flex-col w-max self-start h-max text-left gap-3 p-1'>
          <h1 className='text-2xl lg:text-3xl font-bold'>Are you a&nbsp;<span className='border-b-2 border-lime-300'>recruiter?</span></h1>
          <div>
            <h3 className='text-lg'>take the 120 second tour</h3>
          </div>
        </article>
      </section> */}
    </main>
  )
}
