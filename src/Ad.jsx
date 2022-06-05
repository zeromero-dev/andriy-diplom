import React from 'react'
import './Ad.css'
import useGeoLocation from 'react-ipgeolocation'
const username = "Andriy"

//міняти ці переменні в 19 строчці

const COUNTRY_UKRAINE = "УКРАЇНИ"  
const COUNTRY_RUSSIA = "РОСІЇ"

const ukr = "https://hromadske.ua/"
const rus = "https://www.currenttime.tv/"
const german = "https://www.dw.com/"
const israel = "https://www.timesofisrael.com/"
const au = "https://www.theaustralian.com.au/"


const Ad = () => {
  const location = useGeoLocation();

  if (location.country === 'UA') {
    return (
      <div className='ad'>
      <a href={ukr}></a>
      <h3>ХОЧЕШ ЗНАТИ 
      УСЮ НОВУ ІНФОРМАЦІЮ 
       З {COUNTRY_UKRAINE}</h3>
      </div>
    )
  } else if (location.country === 'DE') {
    return (
      <div className='ad rus'>
      <a href={german}></a>
      <h3>WANT TO KNOW
      NEW INFORMATION 
      FROM GERMANY</h3>
      </div>
    )
  } else if (location.country === 'AU') {
    return (
    <div className='ad au'>
      <a href={au}></a>
      <h3>WANT TO KNOW
      NEW INFORMATION 
      FROM AUSTRALIA</h3>
      </div>
    )
  } else if(location.country === 'IL' || 'IT') {
    return (
      <div className='ad is'>
      <a href={israel}></a>
      <h3>WANT TO KNOW
      NEW INFORMATION 
      FROM ISRAEL</h3>
      </div>
    )
  }
  return 
    // <div className='ad'>
    //   <a href={ukr}></a>
    // <h3>ХОЧЕШ ЗНАТИ 
    // УСЮ НОВУ ІНФОРМАЦІЮ 
    // З {COUNTRY_UKRAINE}</h3>
    // </div>
}

export default Ad;