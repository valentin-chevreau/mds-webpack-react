import React from 'react'

const Results = ({ data }) => (
  <ul>
    {data.map(item => <li key={item.id}>{item.title}</li>)}
  </ul>
)

export default Results
