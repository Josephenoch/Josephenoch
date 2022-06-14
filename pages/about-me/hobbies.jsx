import React from 'react'

import AboutLayout from '../../Layouts/AboutMeLayout/AboutLayout'
import LeftComponent from '../../Components/AboutMe/LeftComponent'
import SpotifyProvider from '../../Contexts/SpotifyContext'
import RightContent from '../../Components/AboutMe/Hobbies/RightContent'

const Hobbies = () => {
  const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, libero fugiat ullam, omnis minima officia impedit porro eum cumque voluptatem aspernatur, tenetur qui maiores. Assumenda quibusdam consequuntur maxime accusamus nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, libero fugiat ullam, omnis minima officia impedit porro eum cumque voluptatem aspernatur, tenetur qui maiores. Assumenda quibusdam consequuntur maxime accusamus nihil."
  const files = [
    {
      folderName:"none",
      pages:[
        {
          title:"music",
          content:text+"music"
        }
      ],
    },{
      folderName:"Sports",
      pages:[
        {
          title:"Table Tennis",
          content:text+"Table Tennis"
        },
        {
          title:"Badmitton",
          content:text+"Badmitton"
        },
        {
          title:"Pool",
          content:text+"Pool"
        },
        {
          title:"Football",
          content:text+"Football"
        }
      ]
    },
  ]
  return (      
      <>
      <LeftComponent files={files} pageTitle="hobbies"/>
        <div className="w-5 h-full mt-8 px-1 border-t-2 border-t-lines">
              <div className="w-3 h-full mx-auto mt-1 border-t-[6px] border-t-secondary">
              </div>
        </div>
        <section className="w-[41.4%] h-full border-l-2 border-lines">
          <aside className="h-full border-r-2 border-t-2 border-lines mt-8 py-5 px-7 flex flex-col items-center  overflow-y-auto scrollbar-y text-secondary text-sm">
            <SpotifyProvider>
                <RightContent/>
            </SpotifyProvider>
          </aside>
        </section>
    </>
      
  )
}

Hobbies.Layout = AboutLayout

export default Hobbies