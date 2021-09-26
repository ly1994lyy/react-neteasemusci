import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd'
import { getDetailList } from '@/api/homePage'

const colStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}

function OfficialListItem (props) {
  const { list } = props
  const [detailLists, setDetailLists] = useState([])

  const getDetailLists = async () => {
    const res = await getDetailList({ id: list.id })
    if (res.status === 200 && res.data.code === 200) {
      setDetailLists(res.data.playlist.tracks.slice(0, 5))
    }
  }

  useEffect(() => {
    getDetailLists()
  }, [])
  return (
    <div style={{marginBottom:'50px'}}>
      <Row>
        <Col span={4}>
          <img className="wh-100" src={list.coverImgUrl} alt=""/>
        </Col>
        <Col span={18} offset={2} style={colStyle}>
          {
            detailLists.map((list, index) => {
              return (
                <div className="flex-between" key={list.id}>
                  <div>
                    <span>{index + 1}</span>
                    <span className='ml-30'>{list.name}</span>
                  </div>
                  <div>{list.ar.reduce((artists, item, index) => {
                    return index === 0 ? artists + item.name : artists + '/' + item.name
                  }, '')}</div>
                </div>
              )
            })
          }
        </Col>
      </Row>
    </div>
  )
}

export default OfficialListItem
