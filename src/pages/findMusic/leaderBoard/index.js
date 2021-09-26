import React, { useEffect, useState } from 'react'
import OfficialListItem from './OfficialListItem'
import { getLeaderBoard } from '@/api/homePage'
import GlobalListItem from './GlobalListItem'
import { Col, Row } from 'antd'

function Index () {
  const [officialLists, setOfficialLists] = useState([])
  const [globalLists, setGlobalLists] = useState([])

  const getLists = async () => {
    const res = await getLeaderBoard()
    if (res.status === 200 && res.data.code === 200) {
      let officialLists = []
      let globalLists = []
      res.data.list.forEach(i => {
        if (i.ToplistType) {
          officialLists.push(i)
        } else {
          globalLists.push(i)
        }
      })
      setOfficialLists(officialLists)
      setGlobalLists(globalLists)
    }
  }
  useEffect(() => {
    getLists()
  }, [])

  return (
    <div style={{ margin: '0 auto', width: '70%' }}>
      <h2>官方榜</h2>
      {
        officialLists.map(list => {
          return (
            <OfficialListItem list={list} key={list.id}/>
          )
        })
      }
      <h2>全球榜</h2>

      <Row gutter={16}>
        {
          globalLists.map(list => {
            return (
              <Col span={4}>
                <GlobalListItem list={list} key={list.id}/>
              </Col>
            )
          })
        }
      </Row>


    </div>
  )
}

export default Index
