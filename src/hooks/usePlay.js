import { useState, useRef, useMemo, useEffect } from 'react'

let audioRef
let songUrl
const usePlay = () => {
  audioRef = useRef()
  const [duration, setDuration] = useState(0)
  const [current, setCurrent] = useState(0)
  const [songId, setSongId] = useState('')
  const [isPlay, setIsplay] = useState(false)

  songUrl = useMemo(() => `http://music.163.com/song/media/outer/url?id=${songId}.mp3`, [songId])

  const parse = () => {
    setIsplay(false)
    audioRef.current.pause()
  }

  const play = () => {
    setIsplay(true)
    audioRef.current.play()
  }
  const playOrParse = () => {
    if (isPlay) {
      parse()
    } else {
      play()
    }
  }

  const getCurrentTime = () => {
    setCurrent(audioRef.current.currentTime)
  }

  const getDuration = () => {
    setDuration(audioRef.current.duration)
  }

  const changeVolume = (val) => {
    audioRef.current.volume = val
  }

  useEffect(() => {
    console.log(songUrl)
  }, [songId])
  return {
    isPlay,
    audioRef,
    duration,
    current,
    songUrl,
    setSongId,
    songId,
    playOrParse,
    getCurrentTime,
    getDuration,
    changeVolume,
    play,
    parse
  }
}

export default usePlay
