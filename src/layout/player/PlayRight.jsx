import React from 'react'
import SvgIcon from '@/components/SvgIcon'
import { Slider } from 'antd'
import { usePlay } from '@/hooks'

const volumeStyle = {
  width: '100px'
}

function PlayRight () {
  const { changeVolume } = usePlay()

  return (
    <div className="flex w-100">
      <div>
        <SvgIcon name="volume" width={20} color="#C5C5C8" />
      </div>
      <Slider min={0} max={1} step={0.1} style={volumeStyle} defaultValue={1} onChange={(e) => changeVolume(e)} />
    </div>
  )
}

export default PlayRight
