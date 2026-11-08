import React from 'react'

function Pricing() {
  return (
    <div className='container p-3'>
      <div className='row p-5'>
        <div className='col-6 p-5'>
          <h1 className='mb-3 text-muted fs-2'>Unbeatable pricing</h1>
          <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href='' className='mx-5' style={{textDecoration:"none"}}>See priceing <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className='col-6 pt-5'>
          <div className='row text-centre mt-5' style={{fontSize:"10px"}}> 
          <div className='col-4'>
          <img style={{width:"60%"}} src='media/images/pricing-0.svg'/>
          <span className='text-muted '>Free account opening</span>
          </div>
          <div className='col-4'>
          <img style={{width:"60%"}} src='media/images/pricing-1.svg'/>
          <span className='text-muted'>Free equity delivery and direct mutual funds</span>
          </div>
          
          <div className='col-4'>
          <img style={{width:"60%"}} src='media/images/pricing-2.svg'/>
          <span className='text-muted'>Intraday and F&O</span>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Pricing