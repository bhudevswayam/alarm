import React from 'react'
import Clock from '../components/Clock';
import Alarm from '../components/Alarm';
import './App.css'

function App() {
  return <>
    <div className='cointainer'>
      <Clock />
      <Alarm />
    </div>
  </>
}

export default App
