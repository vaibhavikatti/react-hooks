import React from 'react'

function Marks(props) {
  return (
   <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
                <h5 className="display-3 text-secondary">Marks = {props.mark}</h5>
                <button className="btn btn-info" onClick={props.incMarkHandler} >inc Mark</button>
        
        </div>
    </div>
   </div>
  )
}

export default Marks
