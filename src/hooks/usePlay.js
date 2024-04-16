import { useState, useRef } from 'react'

let audioRef
const usePlay = () => {
  audioRef = useRef()
  const [duration, setDuration] = useState(0)
  const [current, setCurrent] = useState(0)
  const [isPlay, setIsPlay] = useState(false)

  const parse = () => {
    setIsPlay(false)
    audioRef.current.pause()
  }

  const play = () => {
    setIsPlay(true)
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
    play()
  }

  const changeVolume = (val) => {
    audioRef.current.volume = val
  }

  return {
    isPlay,
    audioRef,
    duration,
    current,
    playOrParse,
    getCurrentTime,
    getDuration,
    changeVolume,
    play,
    parse
  }
}

export default usePlay
