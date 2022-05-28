import React,{useState} from 'react'
import AboutLayout from '../../Layouts/AboutMeLayout/AboutLayout'
import PageNav from '../../Components/AboutMe/PersonalInfo/PageNav'
import RightContent from '../../Components/AboutMe/PersonalInfo/RightContent'
import LeftContent from '../../Components/AboutMe/PersonalInfo/LeftContent'

const ProfessionalInfo = () => {
  const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, libero fugiat ullam, omnis minima officia impedit porro eum cumque voluptatem aspernatur, tenetur qui maiores. Assumenda quibusdam consequuntur maxime accusamus nihil.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, libero fugiat ullam, omnis minima officia impedit porro eum cumque voluptatem aspernatur, tenetur qui maiores. Assumenda quibusdam consequuntur maxime accusamus nihil."
  const files = [
    {
      folderName:"work",
      pages:[
        {
          title:"FrontEnd Dev",
          text:text+"FrontEnd Dev"
        },
        {
          title:"BackEnd Dev enjnwjbbj",
          text:text+"BackEnd Dev"
        }
      ]
    },
    {
      folderName:"leadership",
      pages:[
        {
          title:"Anchor Intlea Community",
          text:text+"Anchor Intlea Community"
        },
        {
          title:"Hult Prize AUL",
          text:text+"Hult Prize AUL"
        }
      ]
    }
  ]
  const [openEditor, setOpenEditor] = useState(
      {
        active:0,
        pages:[]
      }
    )
  const handleChangeEditor = ((selected) =>{
    setOpenEditor(prevState=>{
      if(prevState.pages.some(page=>page.title===selected.title)){
        const newActive = prevState.pages.findIndex(page=>page.title==selected.title)
        return {...prevState,active:newActive}
      }
      return {active:prevState.pages.length,pages:[...prevState.pages,selected]}
    })
  })
  
  const closeEditor = (item=>{
    setOpenEditor(prevState=>{
      const oldArray = [...prevState.pages]
      const newArray = oldArray.filter(arr=>arr.title!==item.title)
      return {active:0, pages:[...newArray]}
    })
  })
  return (
    <>
      
      <div className="w-40 h-full border-r-2 border-r-lines">
        <PageNav files={files} handleChangeEditor={handleChangeEditor} pageTitle="professional-info"/>
      </div>
      <div className="w-[41.4%] h-full text-secondary text-xs border-r-lines">
        <LeftContent  openEditor={openEditor} handleChangeEditor={handleChangeEditor} closeEditor={closeEditor}/>
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
    </>
    
  )
}

ProfessionalInfo.Layout = AboutLayout

export default ProfessionalInfo