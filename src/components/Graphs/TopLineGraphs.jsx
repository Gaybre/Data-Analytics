import React from 'react'

import ShapeBarChart from './ShapeBarChart'

const TopLineGraphs = ({data}) => {
  const getSalesPerCode = () => data
  .map(item => ({
      Codigo: item.Codigo,
      Ventas: item.Ventas
    }
  ))
  .reduce((code, item) => {
    if (code[item]) {
      code[item] = code[item] + 1
    } else {
      code[item] = 1
    }
    return code
  }, {})
  console.log(getSalesPerCode())
  return <ShapeBarChart data={data}/>
}

export default TopLineGraphs