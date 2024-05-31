"use client"
import React, { useEffect, useState } from 'react'
import Container from './Container'
import axios from 'axios'


function Wallet() {
  const[bal, setBal] = useState("")
  const[val, setVal] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      if (!val) {
        setBal("");
        return;
      }
      const response = await axios.get(`http://localhost:5000/api/balance/${val}`)
      const data = response.data
      setBal(data.balance)

    console.log(data)

    
    }
    fetchData()


  }, [val])

  function handleChange(e:any){
    setVal (e.target.value)

  }
  console.log(val)





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
            className=' p-1 px-3 border-2 border-black rounded-xl '
            onChange={handleChange} />
        </div>
        <div className=' mt-5'>
          <h2 className=' pb-1'> Balance</h2>
          <input
            type="none"
            className=' p-1 px-3 border-2 border-black rounded-xl bg-slate-200 font-bold '
            value={`${bal} `} />
        </div>

      </Container>
    </div>
  )
}

export default Wallet