import Image from 'next/image'

export default function Home() {

  const ICON_SIZE = 32

  return (
    <main className="bg-white text-black flex min-h-screen h-screen flex-col items-center justify-start border-black">
      <header className='flex flex-row h-max w-full p-10 border-b-black justify-between items-center border-2'>
        <h1 className='text-2xl'>Manomay Kagalkar</h1>
        <nav className='flex flex-row h-max w-max justify-evenly items-center gap-10'>
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
    </main>
  )
}
