import React,{useState, useEffect} from 'react'
import AboutLayout from '../../Layouts/AboutMeLayout/AboutLayout'
import CodeShowCaseSection from "../../Components/AboutMe/PersonalInfo/CodeShowCaseSection"
import LeftComponent from '../../Components/AboutMe/LeftComponent'
import { db } from '../../firebase-config'
import { getDocs, collection } from 'firebase/firestore'
const ProfessionalInfo = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const getData= async() =>{
      const docsRef = collection(db,"professionalInfo")
      const docs = await getDocs(docsRef)
      const dat = docs.docs.map(data=>data.data())
      setLoading(false)
      if(dat.length===0){
        setError("Unable to receive data")
        return false
      }
      dat.sort(da=>{
        if(da.folderName==="none"){
          console.log(da.folderName)
          return -1
        }
        else{
          return 1
        }
      })
      setData(dat)
    }
    getData()

  },[])
  return (
    <>
      
      <LeftComponent files={data} error={error} loading={loading} pageTitle="professional-info"/>
      <div className="w-5 h-full mt-8 px-1 border-t-2 border-t-lines">
          <div className="w-3 h-full mx-auto mt-1 border-t-[6px] border-t-secondary">
          </div>
        </div>
        <div className="w-[41.4%] h-full border-l-2 border-lines">
          <div className="h-full border-r-2 border-t-2 border-lines mt-8 py-5 px-7  overflow-y-auto scrollbar-y text-secondary text-sm">
            <CodeShowCaseSection/>
          </div>
        </div>
    </>
    
  )
}

ProfessionalInfo.Layout = AboutLayout

export default ProfessionalInfo