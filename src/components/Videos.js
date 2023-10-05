import React from 'react'
import VideoCard from './VideoCard.js'
const Videos = ({videos}) => {
  return (
    <div className='videos' style={{display:"flex",justifyContent:"center"}}>
      {
        videos.map((item,index)=>(
            <VideoCard index={index} key={item.image} image={item.image} name={item.name} />
        ))
      }
    </div>
  )
}

export default Videos
