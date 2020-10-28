import React from 'react'

import Header from '../components/Header'
import BodyContainer from '../components/BodyContainer'

const TopLine = () => {
  return (
    <>
      <Header
        title='Top Line'
        subtitle="¿Cómo quieres ver los datos?"
      />
      <BodyContainer />
    </>
  )
}

export default TopLine