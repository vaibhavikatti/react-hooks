import React, {useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate'

const URL = "https://fakestoreapi.com"

function Ex3(props) {

  const [products,setProducts]=useState([])

  //pagination
  const [currentItems,setCurrentItems]=useState([])
  const [itemOffset,setItemOffset]=useState(0)
  const [pageCount , setPageCount] = useState(0)


  const getProducts = async ()=>{
    await fetch(`${URL}/products`)
    .then(res=>res.json())
    .then(out => {
    //  console.log(out)
       setProducts(out)
    }).catch(err=>console.log(err.message))
  }

  useEffect(()=>{
    getProducts()
    const endOffset = itemOffset + props.itemsPerPage
    const data = products ? products.slice(itemOffset , endOffset) : []
    setCurrentItems(data)
    const pCount = Math.ceil(products.length/props.itemsPerPage)
    setPageCount(pCount)
    
  },[products])

  const handler = (e)=>{
    console.log("item = " ,e.selected)
    const newOffset = (e.selected * props.itemsPerPage)% products.length
    console.log("newoffset=",newOffset)
    setItemOffset(newOffset)
  }


  

 
 return(
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <h5 className="display-3 text-success">
          EXAMPLE 3
        </h5>
      </div>
    </div>
    <div className="row">
      {
        currentItems && currentItems.map((item,index)=>{
          
          return(
         <div className="col-md-3"key={index}>
             <div className="card" >
             <div className="card-header">
              <h5 className="text-center">{item.id}  {item.title}</h5>
             </div>
             <div className="card-body">
                <div className="display-3 text-warning">
                  <h5 className="text-warning">{item.description}</h5>
                  <h5 className="text-center">{item.price}</h5>
                </div>
              </div>
               
            </div>
         </div>
          )
        })
      }
    </div>
    <div className="row">
      <ReactPaginate
      pageCount={pageCount}
      className='pagination'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        activeClassName='active'
        activeLinkClassName='active'
        onPageChange={handler}
       />
    </div>

    
  </div>
 )
}

export default Ex3
