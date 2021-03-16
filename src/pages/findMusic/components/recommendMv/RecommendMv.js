import React, { useEffect, useState } from 'react'
import { getRecommendMv } from '../../../../api/homePage'
import RecommendMvItem from './RecommendMvItem'
import { Col, Row } from 'antd'

function RecommendMv () {
  const [mv, setMv] = useState([])
  const getMvContent = async () => {
    const res = await getRecommendMv()
    if (res.status === 200 && res.data.code === 200) {
      setMv(res.data.result)
    }
  }
  useEffect(() => {
    getMvContent()
  }, [])
  return (
    <div>
      <h3>推荐MV</h3>
      <Row gutter={16}>
        {
          mv.map(item => {
            return (
              <Col span={6} key={item.id}>
                <RecommendMvItem
                  picUrl={item.picUrl}
                  artistName={item.artistName}
                  playCount={item.playCount}
                  name={item.name}/>
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}

export default RecommendMv