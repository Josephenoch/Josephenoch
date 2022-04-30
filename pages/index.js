import Head from 'next/head'

import logo from "../assets/workcation.svg"
import beachWork from "../assets/beach-work.jpeg"

import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div 
        className='bg-primary' 
        style={{
          height:"100vh"
        }}
      >

        <div className="px-8 py-12">  
          <h1 className='font-headline text-white'>Holla</h1>

        </div>
      </div>
    </>
    
  )

}
