import React,{useState,useMemo} from 'react'
import Marks from './sub/Marks'
import MarkInfo from './sub/MarkInfo'

function Ex5() {
const [marks,setMarks]=useState(0)

const incMarks = ()=>{
    setMarks(marks +1)
}

// useMemo will only recompute the memorised value when one of the dependncies has changed
const updateMarks = useMemo(()=>({
    result : `raju has scored ${marks} in Maths.`
}),[marks])
  return (
   <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <div className="display-3 text-success">useMemo()</div>
        </div>
    </div>
    <Marks mark = {marks} incMarkHandler = {incMarks}/>
    <MarkInfo markinfo = {updateMarks}/>
   </div>
  )
}

export default Ex5
