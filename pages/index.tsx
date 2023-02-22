import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { ConnectButton } from '@rainbow-me/rainbowkit'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Cyber connect  starter</title>
        <meta name="description" content="Cyber connect starter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
       
        <div className='max-w-[1200px] mx-auto '>
      <div >
        <div className=' my-10 flex justify-between'>
         <ConnectButton     />
         <button className='font-semibold bg-blue-500 cursor-pointer rounded-md py-2 px-3 text-white'>Sign-In with Cyber</button>
         </div>
          <div className='h-[70vh]  flex flex-col gap-4 items-center justify-center'>
             <h1 className='text-4xl font-semibold'>Cyber Connect  starter</h1>
              <button className='border border-blue-300 px-4 py-1 font-semibold rounded-lg'>Docs</button>
          </div>
         </div>  
        </div>
          
      </main>
    </>
  )
}
