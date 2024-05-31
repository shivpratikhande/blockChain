import React from 'react'
import Container from './Container'

function Wallet() {
  return (
    <div className=' '>
      <Container>
        <h1>Wallet</h1>
        <div>
          <input 
          className=' border border-black px-3 p-1'
          type="text" 
          placeholder='0x1' />
        </div>
      </Container>

    </div>
  )
}

export default Wallet