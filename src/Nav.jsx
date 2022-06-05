import React from 'react'
import './Nav.css';
import useGeoLocation from "react-ipgeolocation";

const Nav = () => {
  const location = useGeoLocation();
  return (
    <div className='nav'>{location.country}</div>
  )
}

export default Nav