import React from 'react'
import { Outlet } from 'react-router-dom'

function Content () {
  return (
    <div style={{ marginTop: '60px', color: '#fff' }}>
      <Outlet />
    </div>
  )
}

export default Content
