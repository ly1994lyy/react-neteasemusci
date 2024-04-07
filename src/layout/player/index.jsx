import React from 'react'
import Play from './Player'

function Player () {
  return (
    <div className="f-between-center h-100">
      <div>left</div>
      <div>
        <Play />
      </div>
      <div>right</div>
    </div>
  )
}

export default Player
