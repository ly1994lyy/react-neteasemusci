import { useState, useRef } from 'react'

const duration = useState(0)
const playRef = useRef()

const usePlay = () => {
  return {
    duration,
    playRef
  }
}

export default usePlay
