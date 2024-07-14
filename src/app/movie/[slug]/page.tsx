import React from 'react'

const MovieDetail = ({params}: {params: {slug: string}}) => {
  console.log(params);

  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail