import React,{ memo } from 'react'

const MarkInfo = memo((props)=> {
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <div className="display-3 text-secondary">
               <span className="text-danger"> MarkInfo :- </span> {props.markinfo.result}
            </div>
        </div>
    </div>
   </div>
  )
});

export default MarkInfo
