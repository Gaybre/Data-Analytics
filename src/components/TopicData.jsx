import React from 'react'
import { Link } from 'react-router-dom'

const TopicData = ({topic, image, location}) => {
  return (
    <>
      <Link
        to={location || '#'}
        className="topic"
      >
        <img src={image} alt='my-topic' />
        <div className="topic__overlay">
          <p>
            {topic || 'Data'}
          </p>
        </div>
      </Link>
    </>
  )
}

export default TopicData
