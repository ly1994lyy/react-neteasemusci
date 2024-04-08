import { useState, useRef } from 'react'

let audioRef
const usePlay = () => {
  audioRef = useRef()
  const [duration, setDuration] = useState(0)
  const [current, setCurrent] = useState(0)
  const [songUrl, setSongUrl] = useState('')
  const [isPlay, setIsplay] = useState(false)

  const changSong = (id) => {
    setSongUrl(`http://music.163.com/song/media/outer/url?id=${id}.mp3`)
  }

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

  return {
    isPlay,
    audioRef,
    duration,
    current,
    songUrl,
    changSong,
    playOrParse,
    getCurrentTime,
    getDuration,
    changeVolume
  }
}

export default usePlay
