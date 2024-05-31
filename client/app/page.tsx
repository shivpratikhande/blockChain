import React from 'react'
import Wallet from './components/Wallet'
import Transfer from './components/Transfer'

function page() {
  return (
    <div className=' bg-white h-screen text-black '>
      <div className=' pt-16'>
        <div className=' flex justify-center gap-96' >
          <Wallet />
          <Transfer />

        </div>
      </div>

    </div>
  )
}

export default page