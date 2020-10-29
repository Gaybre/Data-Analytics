import React from 'react'

import Button from './Button'

const PaginationTable = ({pagination, total, currentPage, intervalData, setIntervalData}) => {

  const getTotalPagination = total => Math.ceil(total / 20)

  const previousPage = () => {
    setIntervalData({
      ...intervalData,
      from: intervalData.from - 20,
      to: intervalData.to - 20
    })
    pagination(intervalData.from, intervalData.to)
  }

  const nextPage = (intervalData) => {
    setIntervalData({
      ...intervalData,
      from: intervalData.from + 20,
      to: intervalData.to + 20
    })
    pagination(intervalData.from, intervalData.to, 'count')
  }

  return (
    <section className="pagination">
      <h3>Paginación {currentPage} de {getTotalPagination(total)}</h3>
      <p>total: {total} datos</p>
      <div className="pagination__buttons">
        {
          currentPage === 1
          ?
            <Button
              name ='Regresar'
              typeStyle ='disable'
            />
          :
            <Button
              name ='Regresar'
              typeStyle ='outline'
              onClick ={() => previousPage(intervalData)}
            />
        }
        <Button
          name ='Siguiente'
          typeStyle ='outline'
          onClick ={() => nextPage(intervalData)}
        />
      </div>
    </section>
  )
}

export default PaginationTable
