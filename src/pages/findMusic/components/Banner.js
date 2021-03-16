import React from 'react'
import { Carousel } from 'antd'

const contentType = {
  height: '200px',
  width: 'auto'
}

function Banner (props) {
  return (
    <Carousel autoplay={3000} style={{ margin: '0 auto', width: '520px' }}>

      {props.bannerList.map((item) => {
        return (<div key={item.bannerId}>
          <img alt={item.bannerId} style={contentType} src={item.pic} />
        </div>)
      })}
    </Carousel>
  )
}

export default Banner
