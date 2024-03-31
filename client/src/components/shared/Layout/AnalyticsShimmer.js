import React from 'react'
import Header from './Header'
import './Analytic.css'
function AnalyticsShimmer() {

  const data = new Array(6).fill(undefined);

  return (
    <div>
      
      <div className="d-flex flex-row flex-wrap">
        {data?.map((record, i) => (
          <div
            className="card1"
            key={i}
            
          >
            <div className="card-body">
              <h1 className="card-text1">
              
              </h1>
              <h1 className="card-text1">
               
              </h1>
              <h1 className="card-text1">
              
              </h1>
              <h1 className="card-text1">
              
              </h1>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnalyticsShimmer
