
import React from 'react'

function Awards() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <img src='media/images/largestBroker.svg' alt=''/>
        </div>
        <div className='col-6 mt-3'>
          <h1>Largest stock broker in India</h1>
          <p>2+ millions zerodha clients contribute to over 15% of all retail order volumes in India daily trading and investing in:</p>
          <div className='row'>
            <div className='col-6'>
            <ul>
            <li>Futures in Option</li>
            <li>Commodity derivatives</li>
            <li>Currency derivatives</li>
          </ul>
            </div>
            <div className='col-6'>
            <ul>
            <li>Stocks&IPOs</li>
            <li>Direct mutual funds</li>
            <li>Bonds and Govt. Securities</li>
          </ul>
            </div>
          </div>
         <img src='media/images/pressLogos.png' style={{width:"80%"}}/>
        </div>
      </div>
    </div>
  )
}

export default Awards