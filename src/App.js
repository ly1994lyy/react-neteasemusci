import React from 'react';
import './styles/index.scss'
import Main from './components/main/Main';
import HomePage from './pages/findMusic/HomePage';

function App() {
  return (
    <div>
      <Main>
        <HomePage />
      </Main>
    </div>
  );
}

export default App;
