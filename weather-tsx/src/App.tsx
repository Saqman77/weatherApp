import React from 'react'
import './App.scss'
import Header from './components/header/Header'
import TopColumn from './components/cards/Top-column'
import Main from './components/main/Main'
import { useTheme } from './utils/Theme-context'

const App = () => {

  const { lightTheme } = useTheme()

  return (
    <div className='App'
    style={lightTheme ? {backgroundColor: 'rgb(217 217 217)', color: 'black'} : {backgroundColor: '#212022', color: 'white'}}
    >
      <Header />
      <TopColumn />
      <Main/>
    </div>
  )
}

export default App