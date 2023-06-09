import React,{useState , useCallback} from 'react'
import Age from './sub/Age'
import AgeInfo from './sub/AgeInfo'

// useCallback => will return memorised value of call back
//useMemo => will return memorised function of callback

function Ex4() {

  const [age,setAge]= useState(10)

  const incrementAge = ()=>{
    setAge(age+1)
  }
  //useCallback will return a memorised version of the callback that only changes if one of the inputs has changed

  const userAge = `devi's age is ${age}`

  const updateAge = useCallback(()=>{
             return userAge
  },[age])

 return(
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <h5 className="display-3 text-success">
          UseCallback
        </h5>
      </div>
    </div>
    <Age age={age} ageHandler={incrementAge}/>
    <AgeInfo ageInfo = {updateAge}/>

  </div>
 )
}

export default Ex4
