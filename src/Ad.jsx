import React from 'react'
import './Ad.css'

const username = "Andriy"

//міняти ці переменні в 19 строчці

const COUNTRY_UKRAINE = "УКРАЇНИ"  
const COUNTRY_RUSSIA = "РОСІЇ"

const ukr = "https://hromadske.ua/"
const rus = "https://www.currenttime.tv/"

const Ad = () => {
  return (
    <div className='ad'>
      <a href={ukr}></a>
    <h3>ХОЧЕШ ЗНАТИ 
    УСЮ НОВУ ІНФОРМАЦІЮ 
    З {COUNTRY_UKRAINE}</h3>
    </div>
  )
}

export default Ad;