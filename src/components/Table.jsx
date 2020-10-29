import React from 'react'

const Table = ({table, data}) => {
  let id = 1
  return (
    <table className="table">
      <caption>Tabla de resultados generales de {table }</caption>
      <thead>
        <tr>
          <th>ASP</th>
          <th>Canal</th>
          <th>Codigo</th>
          <th>Estado</th>
          <th>Fecha</th>
          <th>Ingresos</th>
          <th>Ventas</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map(item => (
            id++,
            <tr key={`${id}-${item.Codigo}`}>
              <td>{item.ASP}</td>
              <td>{item.Canal}</td>
              <td>{item.Codigo}</td>
              <td>{item.Estado}</td>
              <td>{item.Fecha}</td>
              <td>{item.Ingresos}</td>
              <td>{item.Ventas}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Table