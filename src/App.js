import React from 'react'
import Cookies from 'universal-cookie'

import Ad from './Ad'
import Header from './Header'
import Nav from './Nav'
import Main from './Main'
// import Geo from './Geo'

import './index.css'


const App = () => {

  const cookies = new Cookies();
  cookies.set('Andriy', 'Ukraine', { path: '/' });
  console.log(cookies.get('Andriy')); // Ukraine
  
  return (
    <div>
      <Header />
      <Nav />
      <Ad />
      <Main />
      {/* <Geo /> */}
    </div>  
  )
}

export default App