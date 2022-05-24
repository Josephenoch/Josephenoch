import React,{useState,useEffect} from 'react'

import { AboutLayout } from '../../Layouts/AboutMeLayout/AboutLayout'

import { PersonalInfoNav } from '../../Components/AboutMe/PersonalInfo/PersonalInfoNav'
import LeftContent  from '../../Components/AboutMe/PersonalInfo/LeftContent'
import RightContent from '../../Components/AboutMe/PersonalInfo/RightContent'

const Index = () => {
  const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, libero fugiat ullam, omnis minima officia impedit porro eum cumque voluptatem aspernatur, tenetur qui maiores. Assumenda quibusdam consequuntur maxime accusamus nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, libero fugiat ullam, omnis minima officia impedit porro eum cumque voluptatem aspernatur, tenetur qui maiores. Assumenda quibusdam consequuntur maxime accusamus nihil."
  const files = [
    {
      folderName:"Interest",
      pages:[
        {
          title:"FrontEnd Dev",
          text:text
        },
        {
          title:"BackEnd Dev",
          text:text
        }
      ]
    },
    {
      folderName:"School",
      pages:[
        {
          title:"AUL",
          text:text
        },
        {
          title:"BSI",
          text:text
        }
      ]
    }
  ]
  const [openEditor, setOpenEditor] = useState(
      {
        active:0,
        pages:[
          {
            title:"bio",
            text:text
          }
        ]
      }
    )
  const handleChangeEditor = (selected) =>{
    setOpenEditor(prevState=>{
      if(prevState.pages.some(page=>page.title===selected.title)){
        const newActive = prevState.pages.findIndex(page=>page.title==selected.title)
        return {...prevState,active:newActive}
      }
      return {active:prevState.pages.length,pages:[...prevState.pages,selected]}
    })
  }
  
  return (
    <>
      <div className="w-40 h-full border-r-2 border-r-lines">
        <PersonalInfoNav files={files} handleChangeEditor={handleChangeEditor}/>
      </div>
      <div className="w-[41.4%] h-full text-secondary text-xs border-r-lines">
        <LeftContent  openEditor={openEditor} handleChangeEditor={handleChangeEditor}/>
      </div>
      <div className="w-5 h-full mt-8 px-1 border-t-2 border-t-lines">
            <div className="w-3 h-full mx-auto mt-1 border-t-[6px] border-t-secondary">
            </div>
      </div>
      <div className="w-[41.4%] h-full border-l-2 border-lines">
        <div className="h-full border-r-2 border-t-2 border-lines mt-8 py-5 px-7  overflow-y-auto scrollbar text-secondary text-sm">
          <RightContent/>
        </div>
      </div>
      <div className="w-5 h-full mt-8 px-1 border-t-2 border-t-lines">
            <div className="w-3 h-full mx-auto mt-1 border-t-[6px] border-t-secondary">
              
            </div>
      </div>
    </>
    )
}

Index.Layout = AboutLayout

export default Index