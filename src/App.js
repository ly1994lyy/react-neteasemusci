import React from 'react'
import './styles/index.scss'
import Main from './components/main/Main'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import RightContent from './components/content/RightContent'
import HomePage from './pages/findMusic/HomePage'
import HomeNewMusic from './pages/findMusic/HomeNewMusic'

function App () {
  return (
    <Router>
      <Switch>
        <Main>
          <Route path='/home' render={() =>
            <RightContent parent='Home'>
              <Route exact path='/home/index' component={HomePage}/>
              <Route exact path='/home/newmusic' component={HomeNewMusic}/>
            </RightContent>
          }
          />
        </Main>
      </Switch>
    </Router>
  )
}

export default App
