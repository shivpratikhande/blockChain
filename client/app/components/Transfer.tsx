import React from 'react'
import Container from './Container'

function Transfer() {
    return (
        <div>
            <Container>
                <form action="">

                    <div className=' text-4xl font-bold py-5 '>
                        <h1>TRANSFER</h1>
                    </div>
                    <div className=' flex flex-col gap-1'>
                        <label htmlFor="">Send To</label>
                        <input
                            type="text"
                            placeholder='0x2'
                            className=' p-1 px-3 border-2 border-black rounded-xl ' />
                    </div>
                    <div className=' mt-5'>
                        <h2 className=' pb-1'> Amount</h2>
                        <input
                            type="text"
                            className=' p-1 px-3 border-2 border-black rounded-xl'
                        />
                    </div>
                    <div className=' mt-7  '>
                        <button className=' bg-black text-white px-3 rounded-lg block font-bold  w-full p-[6px] '> Send</button>
                    </div>

                </form>

            </Container>
        </div>
    )
}

export default Transfer