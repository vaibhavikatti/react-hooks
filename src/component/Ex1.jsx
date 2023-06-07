import React, { useState } from 'react'

// react hooks-> use only in functional components
// there are three basic hooks
//1. useState
//2. useEffect
//3. useContext

function Ex1() {

  //const[state,handler]=useState(initial value)
  // Used  to declare react states in functional component

  const [x,setX] = useState(10)
  const [title,setTitle] = useState('Welcome to react hooks')
  const [isView,setIsView] = useState(true)
  const [colors,setColors] = useState(['red','blue','brown'])
  const [user,setUser] = useState({
    name:"raju",
    age:24
  })


 return(
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <h5 className="display-3 text-success">
          EXAMPLE 1
        </h5>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <h5 className="text-info">X ={x}</h5>
        <h5 className="text-info">Todays title is {title}</h5>
        <h5 className="text-info">the view is {isView ? "beautifiul" : "adoptive"}</h5>
        <div className="text-info">
          {
            colors.map((item,index)=>{
              return(
                <h5 className="text-success" key={index}>{index} : {item}</h5>

              )
            })
          }
        </div>
        <h5 className="text-info"> Name is {user.name} </h5>
        <h5 className="text-info"> Age is {user.age} </h5>
      </div>
    </div>
  </div>
 )
}

export default Ex1
