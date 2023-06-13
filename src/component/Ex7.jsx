import React, {useLayoutEffect, useState} from 'react'


const URL = 'https://jsonplaceholder.typicode.com'

function Ex7(props) {
  const [users,setUsers] = useState([])


  const getUsers = async ()=>{
    await fetch(`${URL}/users`)
    .then(res=>res.json())
    .then(out=>{
      console.log("out = ",out)
      setUsers(out)
    }).catch(err=>console.log(err.message))
  }

  useLayoutEffect(()=>{
    getUsers()
  },[])
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success"> Ex-7(useLayoutEffect)</h3>
            </div>
        </div>
        <div className="row">
          {
            users &&users.map((item,index)=>{
              return(
                <div className="col-md-6 text-center mt-2 mb-2 "key={index}>
                  <div className="card">
                    <div className="card-header">
                      <p className="display-3 text-info">{item.name}</p>
                    </div>
                    <div className="card-body">
                      <h4 className="text-warning">Email: {item.email} </h4>
                      <h4 className="text-warning">Phone:{item.phone}</h4>
                      <h4 className="text-warning ">Website:{item.website}</h4>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Ex7
