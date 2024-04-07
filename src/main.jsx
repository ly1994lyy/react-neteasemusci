import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@/assets/css/antd.less'
import { HashRouter } from 'react-router-dom'
import React from 'react'
import 'virtual:svg-icons-register'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)
