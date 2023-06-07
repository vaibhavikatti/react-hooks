import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

const url = "https://jsonplaceholder.typicode.com"

/* 1. Mount
useEffect((=>{

},[]))

  2. Update
  useEffect(()=>{

  },[dependancy])

  3. Unmount
  useEffect((=>{
return ()=>{}
},[]))
 */
function Ex2(props) {
  const [post,setPost]= useState([])

  //pagination states
  const [currentItems,setCurrentItems] = useState([])// current filtered data
  const [itemOffset,setItemOffset] = useState(0) // starting index
  const [pageCount , setPageCount] = useState(0)
  

  // useEffect => api call, initial values

  const getPosts = async ()=>{
    await fetch(`${url}/posts`)
    .then(res=>res.json())
    .then(out=>{
    //  console.log("output",out)
      setPost(out)
    }).catch(err=>console.log(err.message))
  }

  useEffect(()=>{
    getPosts()
    const endOffset = itemOffset + props.itemsPerPage
   // console.log(`init offset = ${itemOffset} - end offset = ${endOffset}`)
    const data = post.slice(itemOffset,endOffset)
    setCurrentItems(data)
    const pCount = Math.ceil(post.length / props.itemsPerPage)
    setPageCount(pCount) 

  },[post])


 return(
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <h5 className="display-3 text-success">
          EXAMPLE 2
        </h5>
      </div>
    </div>
    <div className="row">
      {
        currentItems && currentItems.map((item,index)=>{
          return(
            <div className="col-md-3" key={index}>
             <div className="card">
              <div className="card-header">
                <div className="card-title text-center">
                  {item.title}
                </div>
              </div>
              <div className="card-body">
                <p className="text-success">
                   {item.body}
                </p>
              </div>
              <div className="card-footer">
                <p className="text-success">
                   {item.id}
                </p>
              </div>
             </div>
            </div>
          )
        })
      }
    </div>

    <div className="row">
      <div className="col-md-12">
        <ReactPaginate pageCount={pageCount}
        className='pagination'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        activeClassName='active'
        
        />
      </div>
    </div>
  </div>
 )
}

export default Ex2
