import React, { useEffect, useState } from 'react'
import Papa from 'papaparse'

import Header from '../components/Header'
import BodyContainer from '../components/BodyContainer'

const TopLine = () => {
  const [topLineData, setTopLineData] = useState([])
  const [currentData, setCurrentData] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [intervalData, setIntervalData] = useState({
    from: 0,
    to: 19
  })

  useEffect(() => {
    if (topLineData !== []) {
      let arrayData = []
      Papa.parse('https://res.cloudinary.com/starlink/raw/upload/v1603867079/analytics/data_topline_aylvki.csv',{
        download: true,
        worker: true,
        header: true,
        step: function(row) {
          arrayData.push(row.data)
        },
        complete: function() {
          setTopLineData(arrayData)
          console.log('all is done')
        }
      })
    }
  },[])

  const getPagination = (from, to, count) => {
    let list = []
    for (let i=from; i<=to; i++) {
      list.push(topLineData[i])
    }
    setCurrentData(list)
    if(count) {
      setCurrentPage(currentPage + 1)
    } else {
      setCurrentPage(currentPage - 1)
    }
    window.scrollTo(0, 0)
  }

  return (
    <>
      {(topLineData.length && !currentData.length) && getPagination(intervalData.from, intervalData.to, 'count')}
      <Header
        title='Top Line'
        subtitle="¿Cómo quieres ver los datos?"
      />
      <BodyContainer
        table='Top Line'
        data={currentData}
        pagination={getPagination}
        total={topLineData.length}
        currentPage={currentPage}
        intervalData={intervalData}
        setIntervalData={setIntervalData}
        topLineData={topLineData}
      />
    </>
  )
}

export default TopLine
