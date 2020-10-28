import React from 'react'

import Header from '../components/Header'
import TopicData from '../components/TopicData'

const Top = 'https://res.cloudinary.com/starlink/image/upload/v1603771403/analytics/top_jj558c.jpg'
const Bottom = 'https://res.cloudinary.com/starlink/image/upload/v1603771408/analytics/bottom_lu0z1q.jpg'

const Home = () => {
  return (
    <>
      <Header
        title='Hola Admin'
        subtitle='¿Qué información necesitas revisar hoy?'
      />
      <section className="home">
        <TopicData
          topic='TOP LINE'
          image={Top}
          location='/top-line'
        />
        <TopicData
          topic='BOTTOM LINE'
          image={Bottom}
          location='/bottom-line'
        />
      </section>
    </>
  )
}

export default Home
