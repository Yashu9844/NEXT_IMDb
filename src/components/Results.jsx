import React from 'react'

const Results = ({result}) => {
  return (
    <div>
     {
        result.map((movie,index) => (
          <div key={index}>
            <h1>{movie.original_title}</h1>

          </div>
        ))
     }
    </div>
  )
}

export default Results
