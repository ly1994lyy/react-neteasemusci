import React from 'react'
import Play from './Player'
import PlayRight from './PlayRight'

function Player () {
  return (
    <div className="f-between-center h-100 p-x20">
      <div>left</div>
      <div>
        <Play />
      </div>
      <div>
        <PlayRight />
      </div>
    </div>
  )
}

export default Player
