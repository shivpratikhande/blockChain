import React from 'react'
import Container from './Container'

function Wallet() {
  return (
    <div>
      <Container>
        <div className=' text-4xl font-bold py-5 '>
          <h1>WALLET</h1>
        </div>
        <div className=' flex flex-col gap-1'>
          <label htmlFor="">Your Address</label>
          <input
            type="text"
            placeholder='0x1'
            className=' p-1 px-3 border-2 border-black rounded-xl ' />
        </div>
        <div className=' mt-5'>
          <h2 className=' pb-1'> Balance</h2>
          <input 
          type="none"
          className=' p-1 px-3 border-2 border-black rounded-xl bg-slate-200 ' 
          value={"none"}/>
        </div>

      </Container>
    </div>
  )
}

export default Wallet