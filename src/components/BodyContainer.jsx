import React, { useState } from 'react'

import Loader from './Loader'
import Table from './Table'
import PaginationTable from './PaginationTable'
import Button from './Button'
import TopLineGraphs from './Graphs/TopLineGraphs'

const BodyContainer = ({topLineData, table, data, pagination, total, currentPage, setCurrentPage, intervalData, setIntervalData}) => {

  const [state, setState] = useState({
    topLineTable: 1,
    tpoLineGraph: 0,
    bottomLinetable: 0,
    bottomLineGraph: 0
  })

  const showTable = () => {
    setState({
      ...state,
      topLineTable: 1,
      tpoLineGraph: 0,
      bottomLinetable: 0,
      bottomLineGraph: 0
    })
  }
  const showGraph = () => setState({
    ...state,
    topLineTable: 0,
    tpoLineGraph: 1,
    bottomLinetable: 0,
    bottomLineGraph: 0
  })

  const renderContent = () => {
    if(!data) return <Loader />

    if (state.topLineTable) {
      return(
        <>
          <Table
            table={table}
            data={data}
          />
          <PaginationTable
            pagination={pagination}
            total={total}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            intervalData={intervalData}
            setIntervalData={setIntervalData}
          />
        </>
      )
    }
    if (state.tpoLineGraph) {
      return <TopLineGraphs data={topLineData} />
    }
  }

  return (
    <section className="container">
      <div className="container__left">
        <Button
          name="Tabala"
          onClick={() => showTable()}
        />
        <Button
          name="Gráficas"
          onClick={() => showGraph()}
        />
        {/* <h3>ASP</h3>
        <h3>Canal</h3>
        <h3>Codigo</h3>
        <h3>Estado</h3>
        <h3>Fecha</h3>
        <h3>Ingresos</h3>
        <h3>Ventas</h3> */}
      </div>
      <div className="container__right">
        {renderContent()}
      </div>
    </section>
  )
}

export default BodyContainer