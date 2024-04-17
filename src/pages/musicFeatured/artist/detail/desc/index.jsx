import React, { useEffect, useState } from 'react'
import { getArtistDesc } from '@/apis/artist.js'
import { useLocation, useParams } from 'react-router-dom'
import types from './index.module.less'

const ArtistDesc = () => {
  const { id } = useParams()
  const { state } = useLocation()
  const [briefDesc, setBriefDesc] = useState('')
  const [introduction, setIntroduction] = useState([])
  const queryArtistDesc = async () => {
    try {
      const res = await getArtistDesc({ id })
      setBriefDesc(res.briefDesc)
      setIntroduction(res.introduction)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    queryArtistDesc()
  }, [])
  return (
        <div className={types.descContainer}>
            <h2 className={types.title}>{state.artistName}简介</h2>
            {
              briefDesc.split('\n').map((item, index) => {
                return (
                    <div key={index} className={types.text}>
                      {item}
                    </div>
                )
              })
            }
          {
            introduction.map((e, i) => {
              return (
                        <div key={i}>
                            <h2 className={types.title}>{e.ti}</h2>
                            {
                                e.txt.split('\n').map((item, index) => {
                                  return (
                                        <div key={index} className={types.text}>
                                            {item}
                                        </div>
                                  )
                                })
                            }
                        </div>
              )
            })
            }
        </div>
  )
}

export default ArtistDesc
