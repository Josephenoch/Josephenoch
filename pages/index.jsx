import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <div className="flex justify-center items-center h-full ">  
        <div className='pr-20'>
          <h1 className="text-xs pl-1">Hello world, I am </h1>
          <h1 className="text-6xl font-thin">Joseph Enoch</h1>
          <h1 className="text-2xl font-thin text-secondary-purple"> {"<Front-end Developer/>"}</h1>
          <h1 className="mt-10 text-xs font-thin text-secondary"> //complete the game to continue</h1>
          <h1 className="text-xs font-thin text-secondary"> //you can also see it on my Github page</h1>
          <h1 className="mt-1 text-xs font-thin"> 
            <span className="text-secondary-purple">const   </span>
            <span className="text-accent-green">githubLink </span> 
            =
            <span className="text-accent-orange"> “https://github.com/example/url”</span>
          </h1>




        </div>
        <div style={{
          background:"linear-gradient(135deg, rgba(67, 217, 173,0.7), rgba(23, 85, 83,0.2))"
        }}className=" w-1/4 h-4/6 opacity-50 shadow-[_116px_85px_66px_-54px_rgba(77,91,206,0.3),_-59px_-99px_81px_-41px_rgba(67,217,173,0.64);]">

        </div>
        
      </div>
    </>
    
  )

}
