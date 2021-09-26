import React from 'react'
import './styles/index.less'
import Main from './components/main/Main'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import RightContent from './components/content/RightContent'
import HomePage from './pages/findMusic/HomePage'
import HomeNewMusic from './pages/findMusic/homeNewMusic/HomeNewMusic'
import SongList from  '@/pages/findMusic/songList'
import LeaderBoard from '@/pages/findMusic/leaderBoard'

function App () {
  return (
    <Router>
      <Switch>
        <Main>
          <Route path='/home' render={() =>
            <RightContent parent='Home'>
              <Route exact path='/home/index' component={HomePage}/>
              <Route exact path='/home/newmusic' component={HomeNewMusic}/>
              <Route exact path='/home/songList' component={SongList}/>
              <Route exact path='/home/leaderBoard' component={LeaderBoard}/>
            </RightContent>
          }
          />
        </Main>
      </Switch>
    </Router>
  )
}

export default App
