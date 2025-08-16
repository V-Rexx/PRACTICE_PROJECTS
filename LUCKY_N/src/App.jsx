import { useState } from 'react'
import './App.css'
import Die from './Die'
import Dice from './Dice'
import { sum } from './utils'
import LuckyN from './LuckyN'

function lessThan4(dice){
  return sum(dice) < 4;
}


function App() {

  return (
    <>
      <LuckyN title='Less Than 4' winCheck={lessThan4}/>
    </>
  )
}

export default App
