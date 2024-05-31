import React from 'react'

function Container({children}:any) {
  return (
    <div className=' p-5 bg-slate-100 h-96 border-2 flex flex-col border-black rounded-lg'>
    {children}
    </div>
  )
}

export default Container