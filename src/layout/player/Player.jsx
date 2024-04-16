import React, { useMemo } from 'react'
import SvgIcon from '@/components/SvgIcon'
import { usePlay } from '@/hooks'
import { handleDuration } from '@/utils/handleTime.js'
import { usePlayStore } from '@/store/playStore.js'

const Play = () => {
  const {
    isPlay,
    audioRef,
    duration,
    current,
    playOrParse,
    getCurrentTime,
    getDuration
  } = usePlay()

  const sId = usePlayStore((state) => state.songId)
  const songUrl = useMemo(() => `http://music.163.com/song/media/outer/url?id=${sId}.mp3`, [sId])

  return (
    <div className='flex'>
      <audio ref={audioRef} src={songUrl} onCanPlay={getDuration} onTimeUpdate={getCurrentTime} />
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
      <div>{handleDuration(current, 's')}</div>
      <div>-----</div>
      <div>{handleDuration(duration, 's')}</div>
    </div>
  )
}

export default Play
