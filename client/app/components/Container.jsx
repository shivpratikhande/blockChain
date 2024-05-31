import React from 'react'

function Container({childeren}) {
  return (
    <div>
        <div className=' bg-slate-100 border shadow-lg rounded-xl w-auto h-auto'>
            {childeren}
        </div>
    </div>
  )
}

export default Container