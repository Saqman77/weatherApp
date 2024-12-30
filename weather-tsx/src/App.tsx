import React from 'react'
import './App.scss'
import Header from './components/header/Header'
import TopColumn from './components/cards/Top-column'
import Main from './components/main/Main'

const App = () => {
  return (
    <div className='App'>
      <Header />
        <TopColumn/>
      <Main/>
    </div>
  )
}

export default App