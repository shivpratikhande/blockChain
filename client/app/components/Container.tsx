import React from 'react'

function Container({children}:any) {
  return (
    <div className=' p-5 bg-slate-100 inline-block border-2 border-black rounded-lg'>
    {children}
    </div>
  )
}

export default Container