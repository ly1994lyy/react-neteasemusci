import ReactDOM from 'react-dom/client'
import '@/assets/css/antd.less'
import { HashRouter } from 'react-router-dom'
import React from 'react'
import 'virtual:svg-icons-register'
import Routers from '@/routers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routers />
  </HashRouter>
)
