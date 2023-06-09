import React from 'react'

function AgeInfo(props) {
  return (
   <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <div className="display-3 text-warning">
                {props.ageInfo()}
            </div>
        </div>
    </div>
   </div>
  )
}

export default AgeInfo
