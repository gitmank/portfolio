import Image from 'next/image'

export default function Home() {

  const ICON_SIZE = 36
  const PROFILE_PIC_SIZE = 300

  return (
    <main className="bg-white text-black flex min-h-screen h-screen flex-col items-center justify-start border-black">
      <header className='flex flex-row h-max w-full p-5 lg:p-10 border-b-black justify-between items-center border-[1px]'>
        <h1 className='text-xl lg:text-2xl'>Manomay Kagalkar</h1>
        <nav className='flex flex-row h-max w-max justify-evenly items-center gap-5 lg:gap-10'>
          <a href={'https://github.com/gitmank'} target={'_blank'}>
            <Image 
              src={'/github.png'}
              width={ICON_SIZE}
              height={ICON_SIZE}
              alt={'github icon'}
            ></Image>
          </a>
          <a href={'https://www.linkedin.com/in/manomaykagalkar/'} target={'_blank'}>
            <Image 
              src={'/linkedin.png'}
              width={ICON_SIZE}
              height={ICON_SIZE}
              alt={'linked icon'}
            ></Image>
          </a>
          <a href={'mailto:manomay111@gmail.com'}>
            <Image 
              src={'/email.png'}
              width={ICON_SIZE}
              height={ICON_SIZE}
              alt={'email icon'}
            ></Image>
          </a>
        </nav>
      </header>
      <section className='flex flex-col md:flex-row h-5/6 w-full lg:w-10/12 items-center justify-center gap-5'>
        <aside className='flex flex-col items-center font-bold text-3xl md:text-4xl lg:text-6xl justify-center w-full'>
          <h1>Web Development</h1>
          <span>+</span>
          <h1>Web Security</h1>
        </aside>
        <aside className='flex flex-col items-center justify-center w-full'>
          <Image className='rounded-lg lg:rounded-full'
            src={'/manomay.png'}
            width={PROFILE_PIC_SIZE}
            height={PROFILE_PIC_SIZE}
            alt={'Manomay\'s profile picture'}
          ></Image>
        </aside>
      </section>
    </main>
  )
}
