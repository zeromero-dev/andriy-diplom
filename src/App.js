import React from 'react'

import Ad from './Ad'
import Header from './Header'
import Nav from './Nav'
import Main from './Main'

import './index.css'


const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Ad />
      <Main />
    </div>  
  )
}

export default App