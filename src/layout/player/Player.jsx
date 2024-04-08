import React, { useEffect } from 'react'
import SvgIcon from '@/components/SvgIcon'
import { usePlay } from '@/hooks'

const Play = () => {
  const {
    isPlay,
    audioRef,
    duration,
    current,
    songUrl,
    changSong,
    playOrParse,
    getCurrentTime,
    getDuration
  } = usePlay()

  useEffect(() => {
    changSong('2108827013')
  }, [])

  return (
    <div className='flex'>
      <audio ref={audioRef} src={songUrl} onCanPlay={getDuration} onTimeUpdate={getCurrentTime} controls />
      <div>
        <SvgIcon name="like" color="#C5C5C8" />
      </div>

      <div>
      <SvgIcon name="previous" color="#C5C5C8" />
      </div>
      <div onClick={playOrParse}>
        {isPlay && <SvgIcon name="playing" color="#C5C5C8" />}
        {!isPlay && <SvgIcon name="stop" color="#C5C5C8" />}
      </div>
      <div>
      <SvgIcon name="next" color="#C5C5C8" />
      </div>
      <div>{current}</div>
      <div>-----</div>
      <div>{duration}</div>
    </div>
  )
}

export default Play
