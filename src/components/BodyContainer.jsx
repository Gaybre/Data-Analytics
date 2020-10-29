import React from 'react'

import Loader from './Loader'
import Table from './Table'
import PaginationTable from './PaginationTable'

const BodyContainer = ({table, data, pagination, total, currentPage, setCurrentPage, intervalData, setIntervalData}) => {
  return (
    <section className="container">
      <div className="container__left">
        <h3>ASP</h3>
        <h3>Canal</h3>
        <h3>Codigo</h3>
        <h3>Estado</h3>
        <h3>Fecha</h3>
        <h3>Ingresos</h3>
        <h3>Ventas</h3>
      </div>
      <div className="container__right">
        {
          !data
          ? <Loader />
          :
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
        }
      </div>
    </section>
  )
}

export default BodyContainer